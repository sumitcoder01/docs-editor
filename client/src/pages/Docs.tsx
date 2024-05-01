import { useParams } from "react-router-dom"
import { Editer } from "../componets/specific/Editer";

export default function Docs() {
    const { id } = useParams();
    return (
        <div className='min-h-screen  bg-gray-100'>
            <Editer documentId={id ? id : ""} />
        </div>
    )
}

