import { useParams } from "react-router-dom"
import { Editer } from "../componets/specific/Editer";

export default function Docs() {
    const { id } = useParams();
    return (
        <Editer documentId={id ? id : ""} />
    )
}

