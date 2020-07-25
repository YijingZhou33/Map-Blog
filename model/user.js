const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const Joi = require('@hapi/joi');

// define the mongoose model
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    // 0 ON, 1 OFF
    state: {
        type: Number,
        default: 0
    }
});

const User = mongoose.model('User', userSchema);

// initialize 
async function createUser() {
    const salt = await bcrypt.genSalt(10);
    const pwd = await bcrypt.hash('123456', salt);

    const user = User.create({
        username: 'Zoey',
        email: 'ZHOU1439@umn.edu',
        password: pwd,
        role: 'admin',
        state: 0
    });
}

// createUser();

// validate user info in the server side
const validateUser = user => {
    const schema = Joi.object({
        username: Joi.string().min(2).max(20).required().messages({
            'string.empty': `Username should not be empty`,
            'string.min': `Username should have at least {#limit} characters`,
            'string.max': `Username should have no more than {#limit} characters`,
        }),
        email: Joi.string().email().required().messages({
            'string.empty': `Email address should not be empty`,
            'string.email': `Invalid email address`
        }),
        password: Joi.string().regex(/^[A-Za-z0-9]{6,20}$/).required().messages({
            'string.empty': `Password should not be empty`,
            'string.regex': `Invalid password`
        }),
        role: Joi.string().valid('normal', 'admin').required().messages({
            'string.empty': `Role should not be empty`,
            'string.valid': `Invalid role`
        }),
        state: Joi.number().valid(0, 1).required().messages({
            'string.empty': `State should not be empty`,
            'string.valid': `Invalid state`
        })
    });

    return schema.validateAsync(user, { abortEarly: false });
};

module.exports = { User, validateUser }