import { useAuth } from "../../context/authContext";
import { LogoutIcon } from "../icons/LogoutIcon";
import { toast } from "react-toastify";

export const LogoutButton = () => {
    const { logoutUser } = useAuth();
    const handleLogoutUser = () => {
        if (!logoutUser) return;
        logoutUser();
        toast.success("logout user successfully");
    }
    return (
        <div className="text-2xl cursor-pointer" onClick={handleLogoutUser}><LogoutIcon /></div>
    )
}