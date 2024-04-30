import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../context/authContext"

export type ProtectedProps={
    isLogin:boolean,
    navigateUrl:string
}
export const Protected = ({isLogin=false,navigateUrl}:ProtectedProps) => {
  const {user} =useAuth();
  return (isLogin ? !user : user) ? <Outlet /> : <Navigate to = {navigateUrl} />
}



