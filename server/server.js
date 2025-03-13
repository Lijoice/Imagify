const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const connectDB = require("./config/mongodb"); // Import MongoDB connection
const userRouter = require("./routes/userRoutes"); // Import user routes

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

const startServer = async () => {
    try {
        await connectDB(); // Connect to MongoDB
        console.log("✅ Database connected successfully");

        // Routes
        app.use("/", userRouter);
        app.get("/", (req, res) => res.send("API Working"));

        // Start the server
        app.listen(PORT, () => console.log(`🚀 Server running at port ${PORT}`));
    } catch (error) {
        console.error("❌ Error connecting to the database:", error);
        process.exit(1); // Exit if database connection fails
    }
};

startServer();
