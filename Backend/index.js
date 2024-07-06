import express, { request, response } from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { Book  } from "./models/bookModel.js"; 
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app = express();


app.use(cors());
//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY

//Option 1: Allow all origins with Default of cors
//app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send('Welcome to MERN Stack Tutorial');
});

app.use('/books',booksRoute);

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });
