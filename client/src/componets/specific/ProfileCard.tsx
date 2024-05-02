import { useAuth } from "../../context/authContext";


export const ProfileCard = () => {
    const { user } = useAuth();
    return (
        <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">Profile</h2>
            <div className="flex flex-col gap-2">
                <span><strong>Name:</strong> {user?.name}</span>
                <span><strong>Email:</strong> {user?.email}</span>
                <span><strong>Created At:</strong> {user?.createdAt}</span>
                <span><strong>Updated At:</strong> {user?.updatedAt}</span>
            </div>
        </div>
    );
};
