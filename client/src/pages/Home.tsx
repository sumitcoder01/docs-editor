import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { v4 as uuid } from "uuid";

const Home = () => {
  const id = uuid();
  const {user} =useAuth();
  return (
    <div className="flex flex-col">
      <span>Home -{user?.name}</span>
      <Link to ={`/document/${id + Date.now()}`}>Create a document</Link>
    </div>
  )
}

export default Home
