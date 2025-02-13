import { useState } from "react";

import axios from "axios";
//importiamo la hook per utilizzare il contesto
import { useAppDataContext } from "./contexts/AppDataContext";

export default function SearchBar() {
  //creazione di una variabile di stato che conterrà i dati dell'input di ricerca
  const [search, setSearch] = useState("");

  //destrutturazione della setter di movies per modificare i dati di movies che conterrà i dati importati dalla API
  const { setMovies, setSeries } = useAppDataContext();

  const handleSearch = (event) => {
    event.preventDefault();
    //nella chiamata ad axios includiamo alcuni parametri per la restituzione dei dati (api_key ci è stata assegnata dalla api
    // al momento della registrazione per usufruirne)
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "7344c81775a7dcbca7f849d36ff8791d",
          language: "it-IT",
          query: search,
        },
      })
      .then((res) => setMovies(res.data.results));

    axios
      .get("https://api.themoviedb.org/3/search/tv", {
        params: {
          api_key: "7344c81775a7dcbca7f849d36ff8791d",
          language: "it-IT",
          query: search,
        },
      })
      .then((res) => setSeries(res.data.results));
  };

  //restituiamo un form che rappresenta la nostra search bar
  //controllato dalla funzione handleSearch al suo submit
  return (
    <form onSubmit={handleSearch}>
      <input
        name="search"
        type="search"
        className="bg-gray-100 text-gray-800"
        placeholder="Cerca..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit" className="pl-2.5">
        Cerca
      </button>
    </form>
  );
}
