import { useState } from "react";
import { BASE_URL } from "../../../constants/apiUrl";
import { toast } from "react-toastify";
import { HypnosisLoader } from "../../loaders/HypnosisLoader";

export type DeleteDocumentButtonProps = {
    id: string;
    deleteDocumentById: (id: string) => void;
}

export const DeleteDocumentButton = ({ id, deleteDocumentById }: DeleteDocumentButtonProps) => {
    const [loading, setLoading] = useState<boolean>(false);

    const deleteDocument = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/api/docs/deletedocument/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                },
            });
            const response = await res.json();
            if (response.success) {
                deleteDocumentById(id);
            }
            else {
                toast.error(response.error);
            }
        } catch (error) {
            toast.error("Internal Server Error!");
        }
        setLoading(false);
    }

    const handleDeleteDocument = async () => {
        if (loading) return;
        await deleteDocument();
    }

    return (
        <div className='cursor-pointer hover:text-gray-500' onClick={handleDeleteDocument}>{loading ? <HypnosisLoader /> : "Delete"}</div>
    )
}