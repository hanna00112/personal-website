import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
