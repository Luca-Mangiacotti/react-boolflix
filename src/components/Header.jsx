//components
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="p-15 flex justify-between bg-[#0c0c0c] text-gray-50">
      <h1>BoolFlix</h1>
      <SearchBar />
    </header>
  );
}
