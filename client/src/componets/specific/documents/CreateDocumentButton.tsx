import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { AddIcon } from "../../icons/AddIcon";

export const CreateDocumentButton = () => {
    const id = uuid();
    return (
        <Link to={`/document/${id + Date.now()}`}>
        <div className="w-40 bg-blue-500 font-bold text-white px-2 py-2 rounded hover:bg-blue-600 flex justify-center items-center gap-1"> 
            <AddIcon/>
            <span className="text-sm" >New Document</span>
        </div>
        </Link>
    );
};
