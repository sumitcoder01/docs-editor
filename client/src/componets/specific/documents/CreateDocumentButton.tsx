import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

export const CreateDocumentButton = () => {
  const id = uuid();
  const navigate = useNavigate();
  return (
      <button onClick={() => navigate(`/document/${id + Date.now()}`)}>Create a new document</button>
  )
}