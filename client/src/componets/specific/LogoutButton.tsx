import { useAuth } from "../../context/authContext";

export const LogoutButton = () => {
    const { logoutUser } = useAuth();
    return (
        <button className="text-md" onClick={logoutUser}>Logout</button>
    )
}