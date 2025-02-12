import { createContext, useContext, useState } from "react";

//creazione del contesto
const AppDataContext = createContext();

//definizione di un custom Provider (trasmettitore dei dati da condividere)
function AppDataProvider({ children }) {
  // definizione della variabile di stato che conterrà le informazioni da condividere
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  return (
    <AppDataContext.Provider value={{ movies, setMovies, series, setSeries }}>
      {children}
    </AppDataContext.Provider>
  );
}

//creazione di una custom hook per consumare facilemente questo contesto
//servirà per recuperare i dati dal contesto
function useAppDataContext() {
  return useContext(AppDataContext);
}

//esportazione sia del provider che dell'hook per consumare il contesto
export { AppDataProvider, useAppDataContext };
