import { useParams } from "react-router-dom"

export default function Docs() {
    const { id } = useParams();
    return (
        <div>
            Docs : {id}
        </div>
    )
}

