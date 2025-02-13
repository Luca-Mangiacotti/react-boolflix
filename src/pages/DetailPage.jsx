import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import dei componenti
import Header from "../components/Header";
import Card from "../components/Card";

export default function DetailPage({ element }) {
  const [currentElement, setCurrentElement] = useState({});

  return (
    <>
      <Header />
      <Link to={"/"}>
        <button>HOMEPAGE</button>
      </Link>
      <h1>pagina dettaglio</h1>
    </>
  );
}
