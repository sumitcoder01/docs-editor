import { Link } from "react-router-dom";
import Logo from '/logo.svg';
import { LogoutButton } from "./LogoutButton";

export const Navbar = () => {
  return (
    <nav className="mx-2 mt-3 flex items-center flex-col gap-5 w-[10%] sm:w-[15%] md:w-auto">
      <div className="flex items-center flex-col gap-1 cursor-pointer">
        <Link to="/"><img src={Logo} alt="Logo" className="h-8" /></Link>
        <span className="text-sm font-semibold">Docs Editer</span>
      </div>
      <LogoutButton/>
    </nav>
  )
}

