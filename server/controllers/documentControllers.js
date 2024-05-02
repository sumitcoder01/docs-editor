import Document from "../models/Document.js";

export const getDocumentData = async (id, authorId) => {
    try {
        let document = await Document.findOne({ documentId: id });
        if (!document) {
            document = await Document.create({
                title: "untitled - " + Date.now(),
                documentId: id,
                data: "",
                authorId
            })
        }
        return document.data;
    } catch (error) {
        console.log("error while geting document")
        return "";
    }
}

export const updateDocumentData = async (id, data) => {
    try {
        await Document.findOneAndUpdate({ documentId: id }, { data });
    } catch (error) {
        console.log("error while updating document")
    }
}

export const getDocuments = async (req, res) => {
    try {
        const authorId = req.user.id;
        const documents = await Document.find({ authorId }).select("-data").sort({ updatedAt: -1 });
        res.json({ success: true, message: "user document successfully fetched", documents });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, error: "Internal Server Error", documents: [] });
    }
}

export const updateDocumentTitle = async (req, res) => {
    try {
        const updatedItem = await Document.findByIdAndUpdate(req.params.id, { title: req.body.title }, { new: true });
        if (updatedItem) {
            res.status(200).json({ success: true, message: "title Updated Successfully" });
        } else {
            res.status(404).json({ success: false, error: "title not Updated" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(401).json({ success: false, error: "Internal Server Error!" });
    }
}

export const deleteDocument = async (req, res) => {
    try {
        const document = await Document.findByIdAndDelete(req.params.id);
        if (document) {
            res.status(200).json({ success: true, message: 'Document deleted successfully' });
        } else {
            res.status(404).json({ success: false, error: 'Document not deleted' });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}