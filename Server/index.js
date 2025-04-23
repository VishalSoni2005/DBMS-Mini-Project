const express = require('express');
const connection = require("./Config/db");
const router = require('./Routes/Routes');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const cloudinaryConnection = require('./Config/cloudinary');
cloudinaryConnection();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ✅ Corrected - Keep only one instance of fileUpload
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
  })
);

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use('/', router);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
