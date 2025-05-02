import express from "express";
import cors from "cors";
import { sign, verify } from "jsonwebtoken";
import bcrypt from "bcryptjs"; // Import bcryptjs as default
import bodyParser from "body-parser"; // Import body-parser as default

const { hash, compare } = bcrypt; // Destructure hash and compare from bcrypt
const { json } = bodyParser; // Destructure json from body-parser

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(json());

// Mock database
let users = [];

// Secret key for JWT
const JWT_SECRET = "your_jwt_secret_key";

// Helper function to generate JWT token
const generateToken = (user) => {
  return sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });
};

// Register endpoint
app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;

  // Check if user already exists
  const userExists = users.find((user) => user.email === email);
  if (userExists) {
    return res.status(400).json({ error: "User already exists" });
  }

  try {
    // Hash password
    const hashedPassword = await hash(password, 10);

    // Create new user
    const newUser = { id: Date.now(), email, password: hashedPassword };
    users.push(newUser);

    // Generate JWT token
    const token = generateToken(newUser);

    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ error: "Failed to register user" });
  }
});

// Login endpoint
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  // Find user
  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(400).json({ error: "Invalid email or password" });
  }

  try {
    // Check password
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Generate JWT token
    const token = generateToken(user);

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Failed to log in" });
  }
});

// Protected route example
app.get("/api/protected", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded = verify(token, JWT_SECRET);
    res.json({ message: "You have access to this protected route", user: decoded });
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
});

// Update user endpoint
app.put("/api/user", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded = verify(token, JWT_SECRET);
    const user = users.find((u) => u.id === decoded.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const { name, diet } = req.body;
    if (!name && !diet) {
      return res.status(400).json({ error: "Name or diet is required" });
    }

    user.name = name || user.name;
    user.diet = diet || user.diet;

    res.json(user);
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});