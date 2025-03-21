const mongoose = require("mongoose");

const dbconnect = async () => {
    try {
        console.log("Connecting to MongoDB...");
        console.log("Connection String:", process.env.CONNECTION_STRING ? "✅ Found" : "❌ Not Found");

        const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("🔥 Connected to MongoDB");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err.message);
        process.exit(1);
    }
};
module.exports = dbconnect; // exporting dbconnect function
