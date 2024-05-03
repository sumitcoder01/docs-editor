import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';
import auth from './routes/auth.js';
import docs from './routes/docs.js';
import connectToMongo from './db.js'
import bodyParser from 'body-parser';
import { getDocument, receiveChanges, loadDocument, sendChanges, saveDocument } from './constants/socketEvents.js';
import { getDocumentData, updateDocumentData } from './controllers/documentControllers.js';

const app = express()
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

//Connect To MongoDB
try {
  connectToMongo();
  console.log("Connect to Database  Successfully");
} catch (error) {
  console.error(error.message);
}


const port = process.env.PORT || 8000

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Available Routes
app.use('/api/auth', auth);
app.use('/api/docs', docs);



io.on('connection', (socket) => {
  socket.on(getDocument, async ({ documentId, authorId }) => {
    const data = await getDocumentData(documentId, authorId);
    socket.join(documentId);
    socket.emit(loadDocument, data);

    socket.on(sendChanges, data => {
      socket.broadcast.to(documentId).emit(receiveChanges, data);
    })

    socket.on(saveDocument, async ({ documentId, data }) => {
      await updateDocumentData(documentId, data);
    })
  })
});

server.listen(port, () => {
  console.log('docs editer backend listening on ' + port);
});