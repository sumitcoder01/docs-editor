import { toast } from "react-toastify";
import { useAuth } from "../context/authContext";
import { BASE_URL } from "../constants/apiUrl";
import { useState } from "react";
import logo from '/logo.svg';
import { HypnosisLoader } from "../componets/loaders/HypnosisLoader";
import { InputField } from "../componets/shared/InputField";
import { PasswordField } from "../componets/shared/PasswordField";
import { Link } from "react-router-dom";
import { formattedDate } from "../utils/FormateDate";
import { authToken } from "../constants/authToken";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { setUser } = useAuth();

  const loginUser = async (email: string, password: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
      const response = await res.json();
      if (response.success) {
        localStorage.setItem(authToken, response.authToken);
        const { _id, name, email, createdAt, updatedAt } = response.user;
        if(setUser){
        setUser({
            id: _id,
            name,
            email,
            createdAt: formattedDate(createdAt),
            updatedAt: formattedDate(updatedAt)
        })
      }
        toast.success(response.message);
      }
      else {
        toast.error(response.error);
      }
    } catch (error) {
      toast.error("Internal Server Error!");
    }
    setEmail('');
    setPassword('');
    setLoading(false);
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    await loginUser(email, password);
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 mt-4">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <span className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
          Docs Editer
        </span>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login in account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <InputField type={"email"} name={"email"} value={email} handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} label={"Your email"} placeholder={"name@company.com"} />
              <PasswordField name={"password"} value={password} label={"Password"} handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} showPassword={showPassword} setShowPassword={setShowPassword} placeholder={"••••••••"} minLength={5} />
              <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{loading ? <HypnosisLoader /> : "Login In"}</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Not Register yet? <Link to="/register" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Register here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
