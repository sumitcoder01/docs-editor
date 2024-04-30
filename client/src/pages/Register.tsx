import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../constants/apiUrl";
import { useState } from "react";

const Register = () => {
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate();
  
  const createUser = async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
        const res = await fetch(`${BASE_URL}/api/auth/createuser`, {
            method: "POST",
            body: JSON.stringify({ name, email, password })
        });
        const response = await res.json();
        if (response.success) {
            navigate("/login")
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
      {loading ? <button className='mx-3 px-2 bg-blue-500' onClick={() => createUser("", "","")}>Register</button>:""}
    </div>
  )
}

export default Register
