import { Link } from "react-router-dom";
//import del context per i dati da visualizzare
import { useAppDataContext } from "../components/contexts/AppDataContext";
//import dei componenti
import Header from "../components/Header";
import StarsVote from "../components/StarsVote";
import FlagSniffer from "../components/FlagSniffer";

export default function DetailPage() {
  const { currentElm } = useAppDataContext();
  console.log(currentElm);
  return (
    <>
      <Header />
      <div className="p-2.5">
        <Link to={"/"}>
          <button className="cursor-pointer p-1.5 rounded-lg border-1 border-[#000000] hover:bg-[#43465e] hover:text-[#ffffff]">
            <i className="fa-solid fa-arrow-left"></i> indietro
          </button>
        </Link>
        <h1>Dettaglio contenuto</h1>
        <div className=" w-full h-full flex p-5">
          <img
            src={`http://image.tmdb.org/t/p/w342${currentElm.poster_path}`}
            alt={currentElm.title ? currentElm.title : currentElm.name}
            className="h-full rounded-lg mr-2.5"
          />
          <div className="p-10 w-full h-dvh rounded-lg border-2 border-[#000000] bg-[#43465e]">
            {currentElm.title ? (
              <h4>Titolo Film:{currentElm.title}</h4>
            ) : (
              <h4>Titolo Serie:{currentElm.name}</h4>
            )}

            {currentElm.original_title ? (
              <p>Titolo originale: {currentElm.original_title}</p>
            ) : (
              <p>Titolo originale: {currentElm.original_name}</p>
            )}

            <p>{currentElm.release_date}</p>
            <p>{currentElm.overview}</p>
            <div>
              Voto:
              <div>{StarsVote(Math.trunc(currentElm.vote_average / 2))}</div>
              <p>{`Voto in decimi ${Math.trunc(
                currentElm.vote_average
              )}/10`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
