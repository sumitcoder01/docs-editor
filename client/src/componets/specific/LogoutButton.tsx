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
        <div className="text-2xl cursor-pointer flex flex-col gap-1 items-center" onClick={handleLogoutUser}>
            <LogoutIcon />
            <span className="text-xs md:text-sm font-semibold">Logout</span>
        </div>
    )
}