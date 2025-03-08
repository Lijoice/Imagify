import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import  connectDB  from './config/mongodb.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const startServer = async () => {
    try {
        await connectDB();
        console.log("Database connected successfully");

        app.get('/', (req, res) => res.send("API Working"));

        app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1); // Exit if database connection fails
    }
};

startServer();
