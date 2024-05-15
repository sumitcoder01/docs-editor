import { Link } from "react-router-dom";
import Logo from '/logo.svg';
import { LogoutButton } from "./LogoutButton";

export const Navbar = () => {
  return (
    <nav className="rounded rounded-tl-none rounded-bl-none  mr-1 px-4 flex items-center flex-col gap-5 w-[13%] sm:w-[15%] md:w-auto  bg-[#353839] text-white h-auto">
      <div className="flex mt-3 mx-2  items-center flex-col gap-1 cursor-pointer">
        <Link to="/"><img src={Logo} alt="Logo" className="h-8" /></Link>
        <span className="text-xs md:text-sm font-semibold">Docs Editer</span>
      </div>
      <LogoutButton/>
    </nav>
  )
}

