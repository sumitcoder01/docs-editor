import { Link } from "react-router-dom";
import Logo from '/logo.svg';

export const Navbar = () => {
  return (
    <nav className="mx-2 flex items-center flex-col gap-1">
      <Link to="/"><img src={Logo} alt="Logo" className="h-8"/></Link>
      <span className="text-sm font-semibold">Docs Editer</span>
    </nav>
  )
}

