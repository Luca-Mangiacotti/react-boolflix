import FlagSniffer from "./FlagSniffer";
import StarsVote from "./StarsVote";

export default function Card({ element }) {
  return (
    <li key={element.id} className="py-2">
      <div id="card" className=" w-40">
        <img
          id="posterCard"
          src={`http://image.tmdb.org/t/p/w342${element.poster_path}`}
          alt={element.title ? element.title : element.name}
          className="h-52"
        />
        <div id="contentCard">
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
        </div>
      </div>
    </li>
  );
}
