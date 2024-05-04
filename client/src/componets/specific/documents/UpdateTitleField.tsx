import { useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../constants/apiUrl";
import { HypnosisLoader } from "../../loaders/HypnosisLoader";

export type UpdateTitleFieldProps = {
    id: string;
    title: string;
    name?: string;
    type?: string;
    placeholder?: string;
    minLength?: number;
    required?: boolean;
    toggelShow: () => void;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
}
export const UpdateTitleField = ({ id, title, name = "title", type = "text", placeholder = "document title..", minLength = 5, required = true, toggelShow, setTitle }: UpdateTitleFieldProps) => {
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
                toast.success(response.message);
                setTitle(selectetTitle)
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
            <input type={type} name={name} id={name} value={selectetTitle} onChange={e => setSelectedTitle(e.target.value)} placeholder={placeholder} className="bg-gray-50 border border-gray-300 outline-none text-gray-900 sm:text-sm rounded-lg block w-full p-2" required={required} minLength={minLength} />
            <button onClick={toggelShow} className="bg-green-500 hover:bg-green-300  py-2 px-3 mr-1 rounded  text-sm">close</button>
            <button onClick={handleUpdateTitle} className="bg-blue-500 hover:bg-blue-300 py-2 px-3 rounded text-sm">{loading ? <HypnosisLoader /> : "update"}</button>
        </div>
    )
}