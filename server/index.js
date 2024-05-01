import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';
import auth from './routes/auth.js';
import connectToMongo from './db.js'
import bodyParser from 'body-parser';

const app = express()
const server = http.createServer(app);
const io = new Server(server);

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



io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log('docs editer backend listening on ' + port);
});