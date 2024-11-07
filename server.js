const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 3000;

// Middleware for parsing JSON data from requests
app.use(bodyParser.json());

// Serve static files from the "public" folder
app.use(express.static("public"));

// Serve the login page on the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "loginpage.html"));
});

// Route for handling login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Dummy validation (replace with database check in real applications)
  if (username === "admin" && password === "password123") {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
