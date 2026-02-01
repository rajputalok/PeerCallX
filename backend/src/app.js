import express from 'express';
import { createServer } from "node:http";
import dotenv from 'dotenv';
dotenv.config();
import { Server } from "socket.io";
import {connectToSocket} from './controllers/socketManager.js';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/users.routes.js';
const PORT = process.env.PORT || 8000;
const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);

app.use(cors());
app.use(express.json({limit: '40kb'}));
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    app.set("mongo-user", process.env.MONGO_URL);
    const connectionDB = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongo Connected: ${connectionDB.connection.host}`);
    server.listen(app.get("port"), () => {
        console.log("Listening on port 8000");
    });

}

start();