// index.js
const express = require("express");
const { body, validationResult } = require("express-validator");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const port = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Define Mongoose Schemas and Models
const contentSchema = new mongoose.Schema({
  aboutMe: String,
  languages: [String],
  technologies: [String],
  developerTools: [String],
});
const Content = mongoose.model("Content", contentSchema);

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  subject: String,
});
const Contact = mongoose.model("Contact", contactSchema);

// Define Routes

// Content Routes
app.get("/contents", async (req, res) => {
  try {
    const contents = await Content.findOne(); // Fetch single document
    res.status(200).json(contents);
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

app.post(
  "/contents",
  body("aboutMe").notEmpty().isString(),
  body("languages").notEmpty().isArray(),
  body("technologies").notEmpty().isArray(),
  body("developerTools").notEmpty().isArray(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Validation errors:", errors.array()); // Log validation errors
      return res.status(400).json({ error: errors.array() });
    }

    try {
      await Content.findOneAndUpdate({}, req.body, { new: true, upsert: true });
      res.status(200).json({ success: true });
    } catch (error) {
      console.log("Error saving data:", error); // Log save error
      res.status(400).json({ success: false });
    }
  }
);

// Contact Routes
app.get("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

app.post(
  "/contacts",
  body("firstName").notEmpty().isString(),
  body("lastName").notEmpty().isString(),
  body("subject").notEmpty().isString(),
  async (req, res) => {
    // Validate
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: "Validation failed" });
    }

    try {
      const newContact = new Contact(req.body);
      const saved = await newContact.save();
      res.status(200).json({ success: true, id: saved._id });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
);

app.get("/contacts/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id).exec();
    if (contact) {
      res.status(200).json(contact);
    } else {
      res.status(404).json({ success: false });
    }
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

app.delete("/contacts/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(204).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
