import FlagSniffer from "./FlagSniffer";
import StarsVote from "./StarsVote";

export default function Card({ element }) {
  return (
    <li key={element.id}>
      <div>
        {element.title ? (
          <h4>Titolo Film:{element.title}</h4>
        ) : (
          <h4>Titolo Serie:{element.name}</h4>
        )}
        <img
          src={`http://image.tmdb.org/t/p/w200${element.poster_path}`}
          alt={element.title ? element.title : element.name}
        />
        {element.original_title ? (
          <p>Titolo originale: {element.original_title}</p>
        ) : (
          <p>Titolo originale: {element.original_name}</p>
        )}
        <div>
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
    </li>
  );
}
