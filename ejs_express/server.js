const express = require('express');
const app = express();
const port = 5000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // To parse POST requests

app.get('/', (req, res) => res.render('home'));
app.get('/about', (req, res) => res.render('about'));
app.get('/admin', (req, res) => res.render('admin'));

app.get('/contact', (req, res) => res.render('contact', { showInfo: false }));

app.post('/contact', (req, res) => {
    const { q1, q2, q3 } = req.body;

    // Answer key (choose the correct picture IDs)
    const answers = {
        q1: 'pic1',
        q2: 'pic3',
        q3: 'pic2'
    };

    if(q1 === answers.q1 && q2 === answers.q2 && q3 === answers.q3){
        // Correct: show contact info
        res.render('contact', { showInfo: true });
    } else {
        // Wrong: show error
        res.render('contact', { showInfo: false, error: "Please verify you are human by answering correctly." });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
