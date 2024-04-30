import { useState, createContext, ReactNode, useEffect, useContext } from "react";
import { User } from "../interfaces/user";
import { Loader } from "../componets/loaders/Loader";
import { BASE_URL } from "../constants/apiUrl";
import { formattedDate } from "../utils/FormateDate";

const AuthContext = createContext<{
    user?: User | null;
    setUser?: React.Dispatch<React.SetStateAction<User | null>>
    logoutUser?: () => void;
}>({});


// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<User | null>(null);

    const logoutUser = async () => {
        localStorage.removeItem('auth-token');
        setUser(null);
    }

    const getUser = async (token: string) => {
        try {
            const res = await fetch(`${BASE_URL}/auth/getuser`, {
                method: "GET",
                headers: {
                    "auth-token": token
                },
            });
            const response = await res.json();
            if (response.success) {
                const { _id, name, email, createdAt, updatedAt } = response.user;
                setUser({
                    id: _id,
                    name,
                    email,
                    createdAt: formattedDate(createdAt),
                    updatedAt: formattedDate(updatedAt)
                })
            }
        } catch (error) {
            console.log("Internal Server Error!");
        }
        setLoading(false);
    }

    useEffect(() => {
        if (localStorage.getItem("auth-token")) {
            const token = localStorage.getItem("auth-token") || ""
            getUser(token);
        }
        else setLoading(false);
    }, [])

    const value = { user, setUser, logoutUser };

    return (
        <AuthContext.Provider value={value}>
            {loading ? <Loader /> : children}
        </AuthContext.Provider>
    );
}
