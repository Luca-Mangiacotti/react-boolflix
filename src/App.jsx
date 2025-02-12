import Header from "./components/Header";
import Main from "./components/Main";

//importazione del provider dal contesto
import { AppDataProvider } from "./components/contexts/AppDataContext";

export default function App() {
  return (
    <AppDataProvider>
      <Header />
      <Main />
    </AppDataProvider>
  );
}
