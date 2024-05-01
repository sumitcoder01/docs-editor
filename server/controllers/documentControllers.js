import Document from "../models/Document.js";

export const getDocumentData = async (id, authorId) => {
    try {
        let document = await Document.findOne({ documentId: id });
        if (!document) {
            document = await Document.create({
                documentId: id,
                data: "",
                authorId
            })
        }
        console.log("get document successfully");
        return document.data;
    } catch (error) {
        console.log("error while geting document")
        return "";
    }
}

export const updateDocumentData = async (id, data) => {
    try {
        await Document.findOneAndUpdate({ documentId: id }, { data });
        console.log("updated successfully");
    } catch (error) {
        console.log("error while updating document")
    }
}

export const getDocuments = async (req, res) => {
    try {
        const authorId = req.user.id;
        const documents = await Document.find({ authorId });
        res.json({ success: true, message: "user document successfully fetched", documents });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, error: "Internal Server Error", documents: [] });
    }
}