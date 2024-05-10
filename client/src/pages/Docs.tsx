import { useParams } from "react-router-dom"
import { Editer } from "../componets/specific/Editer";
import { Navbar } from "../componets/specific/Navbar";

export default function Docs() {
    const { id } = useParams();
    return (
        <div className='min-h-screen bg-gray-100 flex overflow-x-hidden'>
            <Navbar/>
            <div className='mx-2'> <Editer documentId={id ? id : ""} /></div>
        </div>
    )
}

