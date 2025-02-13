//components
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="p-15  bg-[#000000] text-gray-50 md:flex justify-between items-center">
      <img id="Logo" src="../../images/logo.png" alt="logo" />
      <SearchBar />
    </header>
  );
}
