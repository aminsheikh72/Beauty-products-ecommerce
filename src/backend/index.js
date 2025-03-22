const express = require("express");
const cors = require("cors");

const app = express();

// ✅ CORS Enable for Specific Frontend
app.use(cors({
  origin: "https://your-frontend.vercel.app", // Yahan apni frontend website ka URL daalo
  methods: "GET, POST, PUT, DELETE",
  credentials: true
}));

app.use(express.json()); // JSON data handle karne ke liye

// ✅ Sample API Route
app.get("/", (req, res) => {
  res.send("Backend is running with CORS enabled!");
});

// ✅ Server Start Karo
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
