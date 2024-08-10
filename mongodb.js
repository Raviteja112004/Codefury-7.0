
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb+srv://ravitejamuvce:IGm70s5edUlSiON0@users.ex4rhva.mongodb.net/?retryWrites=true&w=majority&appName=Users', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// User Schema and Model
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

LoginSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    try {
        console.log('Hashing password...');
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(this.password, salt);
        console.log('Hashed password:', hashPassword);
        this.password = hashPassword;
        next();
    } catch (error) {
        console.log('Error while hashing password:', error);
        next(error);
    }
});

const User = mongoose.model('Authentication', LoginSchema);

// Helpline Schema and Model
const HelplineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    issueDescription: {
        type: String,
        required: true
    }
});

const Helpline = mongoose.model('Helpline', HelplineSchema);

module.exports = { User, Helpline };
