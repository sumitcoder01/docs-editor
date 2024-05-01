import { validationResult } from "express-validator";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
const JWT_SECRET = process.env.SECRET;

export const register = async (req, res) => {
    //If There are returns bad Request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, error: "invalid credentials", errors: errors.array() });
    }
    const { name, email, password } = req.body;
    //check weather the user with this email exists already
    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ success: false, error: "Sorry a user with this email already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);
        //Create a  new User
        await User.create({
            name,
            email,
            password: secPass,
        });
        res.json({ success: true, message: "user registerd successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
}

export const login = async (req, res) => {
    //If There are returns bad Request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, error: "invalid credentials", errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, error: "Please try to login with correct credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ success: false, error: "Please try to login with correct credentials" });
        }

        const data = {
            user: {
                id: user._id
            }
        }
        // remove passoword before sending user information to client
        user.password = ""
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ success: true, user, authToken, message: "user loged In successfully" });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
}

export const getUser = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.json({ success: true, message: "user details successfully fetched", user });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
}