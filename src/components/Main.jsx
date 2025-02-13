//importazione del context
import { useAppDataContext } from "./contexts/AppDataContext";

//importazione dei componenti
import Card from "./Card";

export default function Main() {
  //creo una variabile che contiene i dati ricevuti dalla API destrutturandola dal context
  const { movies, series } = useAppDataContext();

  //restituiamo una lista mappando l'array di oggetti che contiene le informazioni ricercate per i film
  return (
    <main className="lg py-20 px-10 bg-[#0c0c0c]">
      {movies == "" ? <h1></h1> : <h1>Film</h1>}
      <ul className=" flex items-center overflow-x-auto mb-9 h-100 px-10  overflow-y-clip ">
        {movies.map((element) => (
          <Card key={element.id} element={element} />
        ))}
      </ul>
      {series == "" ? (
        <h1 className="mt-30"></h1>
      ) : (
        <h1 className="mt-30">Serie TV</h1>
      )}
      <ul className=" flex items-center overflow-x-auto h-100 px-10  overflow-y-clip ">
        {series.map((element) => (
          <Card key={element.id} element={element} />
        ))}
      </ul>
    </main>
  );
}
