//importazione del context
import { useAppDataContext } from "./contexts/AppDataContext";

export default function Main() {
  //creo una variabile che contiene i dati ricevuti dalla API destrutturandola dal context
  const { movies } = useAppDataContext();

  //restituiamo una lista mappando l'array di oggetti che contiene le informazioni ricercate
  return (
    <main>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </main>
  );
}
