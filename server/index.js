const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRouter = require('./routes/todos');
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();

app.use(cors());
app.use(express.json());

const db = process.env.REMOTE_DB;

mongoose.connect(db, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Connection to MongoDB database established...");
});

app.use('/todos', todoRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
