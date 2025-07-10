import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Showcase from "./pages/Showcase";
import Experiences from "./pages/Experiences";
import Contact from "./pages/Contact";
import Service from "./pages/Service";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="dark:bg-gradient-to-b bg-slate-50  dark:from-gray-900 dark:to-black transition-colors min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Experiences" element={<Experiences />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Showcase" element={<Showcase />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
