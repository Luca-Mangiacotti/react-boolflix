import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <h1>PAGINA NON TROVATA</h1>
      <Link to={"/"}>
        <button className="cursor-pointer"> TORNA ALLA HOMEPAGE</button>
      </Link>
    </>
  );
}
