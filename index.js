require('dotenv').config();
const express = require('express');
const bcrypt=require('bcrypt');
const path = require('path');
const hbs = require('hbs');
const User = require('./mongodb'); // Collection name importing
const session = require('express-session');
const app = express();
const port = 3000;




app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(session({
    resave:false,
    saveUninitialized:true,
    secret:process.env.SESSION_SECRET
}))
app.get('/', (req, res) => {
    res.render('home', { content: 'Log in', form: '/login',user:'User' });
});

app.get('/login', (req, res) => {
    res.render('login', { content: '' });
});
app.get('/weather', (req, res) => {
    res.render('weather');
});
app.get('/news', (req, res) => {
    res.render('news');
});
app.get('/heatwaves', (req, res) => {
    res.render('Heatwaves');
});
app.get('/landlside', (req, res) => {
    res.render('landslide');
});
app.get('/flood', (req, res) => {
    res.render('flood');
});
app.get('/earthquake', (req, res) => {
    res.render('Earthquake');
});

app.get('/signup', (req, res) => {
    res.render('signup', { content: '' });
});
app.get('/end',(req,res)=>{
    res.send('Hello');
})

app.post('/signup', async (req, res) => {
    try {
        const check = await User.findOne({ name: req.body.name });
        if (check) {
            res.render('signup', { content: 'Username already taken', wrongPassword: "Username taken" });
        } else {
            const data = {
                name: req.body.name,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: req.body.password
            };
            const newUser = new User(data);
            await newUser.save(); // Saving the user, which triggers the password hashing
            res.render('home', { content: 'Log Out', user: req.body.name, form: '/', successSign: "SignUp successful" });
        }
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ name: req.body.name });
        if (!user) {
            res.render('login', { content: 'Wrong Details', wrongPassword: "Wrong Username" });
        } else {
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (isMatch) {
                res.render('home', { content: 'Log Out', user:req.body.name, form: '/', successMessage: 'Login successful!' });
            } else {
                res.render('login', { wrongPassword: 'Wrong Password' });
            }
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log('http://localhost:3000');
});