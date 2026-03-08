import { BrowserRouter, Routes, Route } from "react-router-dom";
import KaroPitch from "./pages/KaroPitch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KaroPitch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;