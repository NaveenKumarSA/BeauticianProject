// require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// You can also customize CORS like this:
app.use(cors({
    origin: "http://localhost:5173", // Change this to your frontend URL in production
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  }));

// Connect to MongoDB
connectDB();
// Routes
app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/services", require("./routes/serviceRoutes"));
// app.use("/api/bookings", require("./routes/bookingRoutes"));

// Start Server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
