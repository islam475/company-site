import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
     <Routes>
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}


export default App

