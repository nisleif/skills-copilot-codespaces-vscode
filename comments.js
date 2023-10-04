// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Set view engine
app.set('view engine', 'ejs');

// Set static directory
app.use('/assets', express.static('assets'));

// Set route
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact', { qs: req.query });
});

app.post('/contact', urlencodedParser, (req, res) => {
    res.render('contact-success', { data: req.body });
});

app.get('/profile/:name', (req, res) => {
    let data = {
        age: 29,
        job: 'ninja',
        hobbies: ['eating', 'fighting', 'fishing']
    };
    res.render('profile', { person: req.params.name, data: data });
});

// Listen to port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});