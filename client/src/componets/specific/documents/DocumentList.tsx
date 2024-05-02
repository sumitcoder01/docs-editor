import { useEffect, useState } from "react";
import { CreateDocumentButton } from "./CreateDocumentButton"
import { DocumentCard } from "./DocumentCard"
import { BASE_URL } from "../../../constants/apiUrl";
import { DocumentMeta } from "../../../interfaces/document";
import { authToken } from "../../../constants/authToken";


export const DocumentList = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [documents, setDocuments] = useState<DocumentMeta[]>([]);


    useEffect(() => {
        const getDocumentsData = async () => {
            const token = localStorage.getItem(authToken) || "";
            try {
                const res = await fetch(`${BASE_URL}/api/docs/getdocuments`, {
                    method: "GET",
                    headers: {
                        "auth-token": token
                    },
                });
                const response = await res.json();
                if (response.success) {
                    setDocuments(response.documents as DocumentMeta[]);
                }
            } catch (error) {
                console.log("Internal Server Error!");
            }
            setLoading(false);
        }
        getDocumentsData();
    }, [])
    return (
        <div>
            <CreateDocumentButton />
            {!loading ? (
                <div className='flex flex-col items-center md:items-start'>
                    {documents && documents.map(documentData => (
                        <DocumentCard key={documentData._id} documentData={documentData} />
                    ))}
                    {documents.length === 0 && <div>No documents found!</div>}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}
