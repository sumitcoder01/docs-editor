import { toast } from "react-toastify";
import { useAuth } from "../context/authContext";
import { BASE_URL } from "../constants/apiUrl";
import { useState } from "react";

const Login = () => {
  const [loading,setLoading]=useState(false);
  const { setUser } = useAuth();

  const loginUser = async (email: string, password: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/auth/loginuser`, {
        method: "POST",
        body: JSON.stringify({ email, password })
      });
      const response = await res.json();
      if (response.success) {
        localStorage.setItem("auth-token", response.authToken);
        if (setUser) setUser(response.user);
        toast.success(response.message);
      }
      else {
        toast.error(response.error);
      }
    } catch (error) {
      toast.error("Internal Server Error!");
    }
    setLoading(false);
  }

  return (
    <div>
      {loading ? <button className='mx-3 px-2 bg-blue-500' onClick={() => loginUser("", "")}>Login</button>:""}
    </div>
  )
}

export default Login
