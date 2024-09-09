import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./sections/Home/Home";
import { About } from "./sections/About/About";
import { Projects } from "./sections/Projects/Projects";
import { Stack } from "./sections/Stack/Stack";
import { Contact } from "./sections/Contact/Contact";
import { Error } from "./sections/Error/Error";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
