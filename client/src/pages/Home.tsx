import { useAuth } from "../context/authContext";

const Home = () => {
  const {user} =useAuth();
  return (
    <div>
      Home -{user?.updatedAt}
    </div>
  )
}

export default Home
