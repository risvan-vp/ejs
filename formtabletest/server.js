const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let submissions = [];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.get("/index", (req, res) => {
  res.render("index");
});

app.get("/table", (req, res) => {
  res.render("table", { submissions });
});

// 📩 Handle form submission
app.post("/submit", (req, res) => {
  const { name, email, mobile, message } = req.body;
  submissions.push({ name, email, mobile, message });
  res.redirect("/table");
});

// 🗑️ Delete a submission
app.post("/delete/:index", (req, res) => {
  const index = req.params.index;
  submissions.splice(index, 1);
  res.redirect("/table");
});

// ✏️ Edit a submission
app.post("/edit/:index", (req, res) => {
  const { name, email, mobile, message } = req.body;
  const index = req.params.index;
  submissions[index] = { name, email, mobile, message };
  res.redirect("/table");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
