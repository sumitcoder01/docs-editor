import { useAuth } from "../../context/authContext";
import { DisplayField } from "../shared/DisplayField";


export const ProfileCard = () => {
    const { user } = useAuth();
    return (
        <div className="p-4 rounded shadow-md w-[85%]">
            <h2 className="text-lg font-semibold mb-2">User Profile</h2>
            <hr className="h-2"/>
            <div className="flex flex-col gap-2">
                <DisplayField name={"Name:"} value={user?.name}/>
                <DisplayField name={"Email:"} value={user?.email}/>
                <DisplayField name={"Created At:"} value={user?.createdAt}/>
                <DisplayField name={"Last Modified At:"} value={user?.updatedAt}/>
            </div>
        </div>
    );
};
