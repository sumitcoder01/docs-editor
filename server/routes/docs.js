import { Router } from "express";
import fetchUser from '../middlewares/fetchUser.js';
import {deleteDocument, getDocuments, updateDocumentTitle} from '../controllers/documentControllers.js';
const router = Router();

//ROUTE 1:Get loggedin  User Documents using: GET "/api/docs/getdocuments". login required
router.get("/getdocuments", fetchUser, getDocuments);

//ROUTE 2:Update document title using: PUT "/api/docs/updatetitle/:id".(Login Required but No use Of MiddleWare)
router.put('/updatetitle/:id',updateDocumentTitle);

//ROUTE 3:Delete food item using: DELETE "/api/docs/deletedocument/:id".(Login Required but No use Of MiddleWare)
router.delete('/deletedocument/:id',deleteDocument);

export default router;