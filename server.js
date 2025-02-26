const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.render('login', {});
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // Check username and password
    if (username === 'admin' && password === 'admin') {

        // If correct, redirect to dashboard
        res.redirect('/dashboard');
    } else {

        // If incorrect, redirect to login 
        res.redirect('/login');
    }
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard', {});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});