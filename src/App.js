import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import GalleryPage from "./components/GalleryPage/GalleryPage";
import MenuPage from "./components/MenuPage/MenuPage";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/About" element={<AboutPage />}/>
        <Route path="/Gallery" element={<GalleryPage />}/>
        <Route path="/Menu" element={<MenuPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
