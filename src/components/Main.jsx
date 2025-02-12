//importazione del context
import { useAppDataContext } from "./contexts/AppDataContext";

import FlagSniffer from "./FlagSniffer";
import StarsVote from "./StarsVote";

export default function Main() {
  //creo una variabile che contiene i dati ricevuti dalla API destrutturandola dal context
  const { movies, series } = useAppDataContext();

  //restituiamo una lista mappando l'array di oggetti che contiene le informazioni ricercate per i film
  return (
    <main>
      <div className="resultPage">
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              {movie.title && (
                <div>
                  <h4>Titolo Film: {movie.title}</h4>
                  <p>Titolo originale: {movie.original_title}</p>
                  <div className="movie-info-field">
                    <p>Lingua: </p>
                    <img
                      className="ico-flags"
                      src={FlagSniffer(movie)}
                      alt={movie.original_language}
                    />
                  </div>
                  <div className="movie-info-field">
                    Voto:
                    <div>{StarsVote(Math.trunc(movie.vote_average / 2))}</div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        <ul>
          {series.map((serie) => (
            <li key={serie.id}>
              {serie.name && (
                <div>
                  <h4>Titolo Serie Tv: {serie.name}</h4>
                  <p>Titolo originale: {serie.original_name}</p>
                  <div className="movie-info-field">
                    <p>Lingua: </p>
                    <img
                      className="ico-flags"
                      src={FlagSniffer(serie)}
                      alt={serie.original_language}
                    />
                  </div>
                  <div className="movie-info-field">
                    <p>Voto: {Math.trunc(serie.vote_average / 2)}</p>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
