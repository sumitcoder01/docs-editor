**Docs Editor**

---

**About**

Docs Editor is a MERN (MongoDB, Express.js, React.js, Node.js) application that provides a real-time text editor with authentication. It enables users to edit and create documents (docs) collaboratively in real-time. The application utilizes sockets for real-time communication and Quill.js as the text editor.

**Demo**

[Demo Link](https://docs-editer.netlify.app)

**Features**

- Create new documents
- Edit and delete previous documents
- Update document titles
- Real-time collaborative editing using sockets

**Deployment**

- Frontend deployed on Netlify
- Backend deployed on Render

**Technologies Used**

- MongoDB: Document database used to store documents and user information.
- Express.js: Backend framework for handling HTTP requests and routing.
- React.js: Frontend library for building user interfaces.
- Node.js: JavaScript runtime environment for executing server-side code.
- Socket.io: Library for enabling real-time, bidirectional communication between clients and server.
- Quill.js: WYSIWYG text editor used for document editing.
- Netlify: Platform for deploying frontend applications.
- Render: Platform for deploying backend applications.

**Environment Variables**

- Frontend:
  - `VITE_BASE_URL`: Backend URL

- Backend:
  - `MONGOURI`: MongoDB connection URI
  - `PORT`: Port for running the server
  - `SECRET`: Secret key for authentication and session management

**Getting Started**

1. Clone the repository: `git clone https://github.com/sumitcoder01/docs-editer.git`
2. Navigate to the project directory: `cd docs-editer`
3. Install dependencies for frontend and backend: `npm install` (for both client and server directories)
4. Create `.env` files in both client and server directories with the required environment variables.
5. Start the frontend and backend servers: `npm run dev` (for both client and server directories)

**Contributing**

Contributions are welcome! Please feel free to open issues or submit pull requests.