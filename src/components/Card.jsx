import { Link } from "react-router-dom";
//import dei componenti
import FlagSniffer from "./FlagSniffer";
import StarsVote from "./StarsVote";
//import del contesto per la SHOW
import { useAppDataContext } from "./contexts/AppDataContext";

export default function Card({ element }) {
  const { currentElm, setCurrentElm } = useAppDataContext();
  const handleDetail = () => {
    console.log(currentElm);
  };
  return (
    <li key={element.id} className="py-2">
      <div id="card" className=" w-40">
        <img
          id="posterCard"
          src={`http://image.tmdb.org/t/p/w342${element.poster_path}`}
          alt={element.title ? element.title : element.name}
          className="h-52"
        />
        <div
          id="contentCard"
          className="p-10 w-40 h-96 rounded-lg border-2 border-[#000000] bg-[#43465e]"
        >
          {element.title ? (
            <h4>Titolo Film:{element.title}</h4>
          ) : (
            <h4>Titolo Serie:{element.name}</h4>
          )}

          {element.original_title ? (
            <p>Titolo originale: {element.original_title}</p>
          ) : (
            <p>Titolo originale: {element.original_name}</p>
          )}
          <div className="flex gap-1">
            <p>Lingua: </p>
            <img
              className="pl-3 w-10"
              src={FlagSniffer(element)}
              alt={element.original_language}
            />
          </div>
          <div>
            Voto:
            <div>{StarsVote(Math.trunc(element.vote_average / 2))}</div>
          </div>
          <Link to={"/detail"}>
            <button
              className="cursor-pointer"
              onClick={() => setCurrentElm(element)}
            >
              visualizza
            </button>
          </Link>
        </div>
      </div>
    </li>
  );
}
