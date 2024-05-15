import { useState } from "react";
import { BASE_URL } from "../../../constants/apiUrl";
import { toast } from "react-toastify";
import { HypnosisLoader } from "../../loaders/HypnosisLoader";
import ConfirmModal from '../../modals/ConfirmModal'

export type DeleteDocumentButtonProps = {
    id: string;
    deleteDocumentById: (id: string) => void;
}

export const DeleteDocumentButton = ({ id, deleteDocumentById }: DeleteDocumentButtonProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);

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

    const handleConfirm = () => {
        toggleModal();
        handleDeleteDocument();
    }

    const toggleModal = () => setShowModal(!showModal);

    return (
        <>
            <div className='cursor-pointer p-2 text-gray-900 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-100 rounded' onClick={toggleModal}>{loading ? <div className='bg-gray-200 px-1 py-1'><HypnosisLoader /></div> : "Delete"}</div>
            {showModal && <ConfirmModal handleConfirm={handleConfirm} toggleModal={toggleModal} type={"Delete"} title={"Delete Document"} description={" Are you sure you want to delete this document?"} />}
        </>
    )
}