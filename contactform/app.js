const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

 const users = [];

 app.get('/', (req, res) => {
  res.render('index');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/index', (req, res) => {
  res.render('index');
});

app.get('/signin', (req, res) => {
  res.render('signin');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/welcome', (req, res) => {
  res.render('welcome');
});

 app.post('/signin', (req, res) => {
  const { name, email, password } = req.body;

   const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.send("User already exists! <a href='/login'>Go to Login</a>");
  }

   users.push({ name, email, password });
  console.log("Registered users:", users);

   res.redirect('/login');
});

 app.post('/login', (req, res) => {
  const { email, password } = req.body;

   const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.send("Invalid email or password. <a href='/login'>Try again</a>");
  }

   res.render('welcome', { name: user.name });
});

 app.post('/submit', (req, res) => {
  const { name, email, mobile, message } = req.body;
  res.render('result', { name, email, mobile, message });
});

 app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
