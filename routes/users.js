const express = require("express");
const router = express.Router();
const User = require('../models/user.js');

// here we are creating different routers

// for getting all records
router.get('/', async(req,res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// for creating new record
router.post('/', async(req,res) => {
    const user = new User ({
        name: req.body.name,
        address: req.body.address,
        cartItems: req.body.cartItems,
        shopping: req.body.shopping
    });

    try{
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

// for updating existing record's data
router.patch("/:id", getUser, async(req,res) => {
    if(req.body.name != null) {
        res.user.name = req.body.name;
    }
    if(req.body.address != null) {
        res.user.address = req.body.address;
    }
    if(req.body.cartItems != null) {
        res.user.cartItems = req.body.cartItems;
    }
    if(req.body.shopping != null) {
        res.user.shopping = req.body.shopping;
    }
    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

// for deleting a record
router.delete("/:id", getUser, async(req,res) => {
    try {
        const user = res.user;
        if (!user) {
            return res.status(404).json({ error: 'Item not found' });
        }
        await user.deleteOne();
        res.status(200).json({message: "User Deleted"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})


async function getUser(req, res, next) {
    let user;
    try { 
        user = await User.findById(req.params.id);
        if(user == null) {
            res.status(404).json({message: "user not found"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }

    res.user = user;
    next();
}

module.exports = router;