import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

//import delle pagine
import Homepage from "./pages/Homepage";
import DetailPage from "./pages/DetailPage";
import PageNotFound from "./pages/PageNotFound";
//importazione del provider dal contesto
import { AppDataProvider } from "./components/contexts/AppDataContext";

export default function App() {
  return (
    <AppDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AppDataProvider>
  );
}
