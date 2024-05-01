import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../constants/apiUrl";
import { useState } from "react";
import logo from '/logo.svg';
import { HypnosisLoader } from "../componets/loaders/HypnosisLoader";
import { InputField } from "../componets/shared/InputField";
import { PasswordField } from "../componets/shared/PasswordField";

export type UserData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<UserData>({ name: "", email: "", password: "", confirmPassword: "" })
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const createUser = async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
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
    setFormData({ name: "", email: "", password: "", confirmPassword: "" })
    setLoading(false);
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
    if (loading || password != confirmPassword) return;
    await createUser(name, email, password);
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>

              <InputField type={"text"} name={"name"} value={formData.name} handleChange={handleChange} label={"Your name"} placeholder={"Admin Doe"} minLength={5} />
              <InputField type={"email"} name={"email"} value={formData.email} handleChange={handleChange} label={"Your email"} placeholder={"name@company.com"} />
              <PasswordField name={"password"} value={formData.password} label={"Password"} handleChange={handleChange} showPassword={showPassword} setShowPassword={setShowPassword} placeholder={"••••••••"} minLength={5} />
              <PasswordField name={"confirmPassword"} value={formData.confirmPassword} label={"Confirm password"} handleChange={handleChange} showPassword={showConfirmPassword} setShowPassword={setShowConfirmPassword} placeholder={"••••••••"} minLength={5} />
              {
                formData.confirmPassword.length != 0 && formData.password != formData.confirmPassword && <div className="flex items-start">
                  <div className="ml-3 text-sm text-red-500">Please enter same passoword in confirm password</div>
                </div>
              }
              <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{loading ? <HypnosisLoader /> : "Create an account"}</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <Link to="/login" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
