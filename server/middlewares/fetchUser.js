import jwt from 'jsonwebtoken';
import { authToken } from '../constants/authToken.js';
const JWT_SECRET = process.env.SECRET;

const fetchuser = (req, res, next) => {
    //Get the user from jwt token and add id to req object
    const token = req.header(authToken);
    if (!token) {
        return res.status(401).json({ success:false,error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ success:false,error: "Please authenticate using a valid token" });
    }
};


export default fetchuser;