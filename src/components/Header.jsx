//components
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="p-15 flex justify-between items-center bg-[#000000] text-gray-50">
      <img id="Logo" src="../../images/logo.png" alt="logo" />
      <SearchBar />
    </header>
  );
}
