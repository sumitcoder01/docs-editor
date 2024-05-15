import { useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../constants/apiUrl";
import { HypnosisLoader } from "../../loaders/HypnosisLoader";
import { CloseIcon } from "../../icons/CloseIcon";

export type UpdateTitleFieldProps = {
    id: string;
    title: string;
    name?: string;
    type?: string;
    placeholder?: string;
    minLength?: number;
    required?: boolean;
    toggelShow: () => void;
    updateDocumentTitle: (id: string, title: string) => void;
}
export const UpdateTitleField = ({ id, title, name = "title", type = "text", placeholder = "document title..", minLength = 5, required = true, toggelShow, updateDocumentTitle }: UpdateTitleFieldProps) => {
    const [selectetTitle, setSelectedTitle] = useState<string>(title);
    const [loading, setLoading] = useState<boolean>(false);

    const updateTitle = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/api/docs/updatetitle/${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ title: selectetTitle })
            });
            const response = await res.json();
            if (response.success) {
                updateDocumentTitle(id, selectetTitle);
                toast.success(response.message);
            }
            else {
                toast.error(response.error);
            }
        } catch (error) {
            toast.error("Internal Server Error!");
        }
        setLoading(false);
    }

    const handleUpdateTitle = async () => {
        if (loading) return;
        await updateTitle();
        toggelShow();
    }

    return (
        <div className='flex gap-1 md:gap-2 items-center'>
            <div className="relative">
                <input type={type} name={name} id={name} value={selectetTitle} onChange={e => setSelectedTitle(e.target.value)} placeholder={placeholder} className="bg-gray-50 border border-gray-300 outline-none text-gray-900 sm:text-sm rounded-lg block w-full py-2 pl-2 pr-7" required={required} minLength={minLength} />
                <div className="flex items-center absolute right-2 inset-y-0 md:text-lg" onClick={toggelShow}><CloseIcon /></div>
            </div>
            <button onClick={handleUpdateTitle} className="bg-blue-500 text-white font-semibold hover:bg-blue-300 py-2 px-3 rounded text-sm">{loading ? <HypnosisLoader /> : "Update"}</button>
        </div>
    )
}