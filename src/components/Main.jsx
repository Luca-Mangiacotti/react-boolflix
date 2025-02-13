//importazione del context
import { useAppDataContext } from "./contexts/AppDataContext";

//importazione dei componenti
import Card from "./Card";

export default function Main() {
  //creo una variabile che contiene i dati ricevuti dalla API destrutturandola dal context
  const { movies, series } = useAppDataContext();

  //restituiamo una lista mappando l'array di oggetti che contiene le informazioni ricercate per i film
  return (
    <main className="lg py-20 px-10">
      <div className="flex justify-between">
        <ul>
          {movies.map((element) => (
            <Card key={element.id} element={element} />
          ))}
        </ul>
        <ul>
          {series.map((element) => (
            <Card key={element.id} element={element} />
          ))}
        </ul>
      </div>
    </main>
  );
}
