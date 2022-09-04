import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import { Vocabulary } from "./pages/Vocabulary/Vocabulary";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
      </Routes>
    </>
  );
}

export default App;
