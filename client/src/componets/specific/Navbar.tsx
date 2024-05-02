import { Link } from "react-router-dom";
import Logo from '/logo.svg';
import { LogoutButton } from "./LogoutButton";

export const Navbar = () => {
  return (
    <nav className="mx-2 mt-1 flex items-center flex-col gap-3">
      <div className="flex items-center flex-col gap-1">
        <Link to="/"><img src={Logo} alt="Logo" className="h-8" /></Link>
        <span className="text-sm font-semibold">Docs Editer</span>
      </div>
      <LogoutButton/>
    </nav>
  )
}

