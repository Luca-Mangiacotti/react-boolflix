//importazione del context
import { useAppDataContext } from "./contexts/AppDataContext";

export default function Main() {
  //creo una variabile che contiene i dati ricevuti dalla API destrutturandola dal context
  const { movies } = useAppDataContext();

  //restituiamo una lista mappando l'array di oggetti che contiene le informazioni ricercate
  return (
    <main>
      <ol>
        {movies.map((movie) => (
          <li key={movie.id}>
            <div>
              <h4>Titolo: {movie.title}</h4>
              <p>Titolo originale: {movie.original_title}</p>
              <div className="movie-language">
                <p>Lingua: </p>
                <img
                  className="ico-flags"
                  src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${movie.original_language.toUpperCase()}.svg`}
                  alt={movie.original_language}
                />
              </div>
              <p>Voto: {Math.trunc(movie.vote_average)}</p>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
