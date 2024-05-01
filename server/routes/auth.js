import { Router } from "express";
import { body } from "express-validator";
import fetchUser from '../middlewares/fetchUser.js';
import { register, login, getUser } from '../controllers/authControllers.js';
const router = Router();


//ROUTE 1:Create a User using: POST "/api/auth/createuser". No login required
router.post("/createuser", [
    body("name", "Name must be atleast 5 characters").isLength({ min: 5 }),
    body("email", "Enter Valid Email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
        min: 5,
    }),
], register);

//ROUTE 2:Authenticate a User using: POST "/api/auth/login". No login required
router.post("/login", [
    body("email", "Enter Valid Email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
        min: 5,
    }),
], login);

//ROUTE 3:Get loggedin  User Details using: POST "/api/auth/getuser". login required
router.get("/getuser", fetchUser, getUser);

export default router;