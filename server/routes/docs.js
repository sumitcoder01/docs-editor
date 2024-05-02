import { Router } from "express";
import fetchUser from '../middlewares/fetchUser.js';
import {getDocuments} from '../controllers/documentControllers.js';
const router = Router();

//ROUTE 1:Get loggedin  User Documents using: GET "/api/docs/getdocuments". login required
router.get("/getdocuments", fetchUser, getDocuments);

export default router;