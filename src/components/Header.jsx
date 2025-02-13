//components
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-15  bg-[#000000] text-gray-50 md:flex justify-between items-center">
      <Link to="/">
        <img id="Logo" src="../../images/logo.png" alt="logo" />
      </Link>

      <SearchBar />
    </header>
  );
}
