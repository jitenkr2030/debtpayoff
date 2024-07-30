// /services/userService.js

const User = require('../models/User');

// Function to create a new user
async function createUser(data) {
    const user = new User(data);
    await user.save();
    return user;
}

// Function to find a user by ID
async function findUserById(id) {
    return User.findById(id);
}

// Function to find a user by email
async function findUserByEmail(email) {
    return User.findOne({ email });
}

// Function to update a user
async function updateUser(id, data) {
    return User.findByIdAndUpdate(id, data, { new: true });
}

// Function to delete a user
async function deleteUser(id) {
    return User.findByIdAndDelete(id);
}

module.exports = {
    createUser,
    findUserById,
    findUserByEmail,
    updateUser,
    deleteUser
};
