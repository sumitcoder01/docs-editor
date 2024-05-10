import { useAuth } from "../../context/authContext";
import { DisplayField } from "../shared/DisplayField";
import { UserIcon } from "../icons/UserIcon";
import { EmailIcon } from "../icons/EmailIcon";
import { DateIcon } from "../icons/DateIcon";

export const ProfileCard = () => {
    const { user } = useAuth();
    return (
        <div className="py-4 px-1 md:px-4 mt-3 rounded shadow-md w-[17rem] md:w-[40rem] bg-[#e9ecef]">
            <h2 className="text-lg font-semibold mb-2">User Profile</h2>
            <hr className="h-0.5 bg-[#dee2e6]" />
            <div className="flex flex-col gap-2">
                <DisplayField name={"Name:"} value={user?.name} IconElement={UserIcon} />
                <DisplayField name={"Email:"} value={user?.email} IconElement={EmailIcon} />
                <DisplayField name={"Created At:"} value={user?.createdAt} IconElement={DateIcon} />
                <DisplayField name={"Last Modified At:"} value={user?.updatedAt} IconElement={DateIcon} />
            </div>
        </div>
    );
};
