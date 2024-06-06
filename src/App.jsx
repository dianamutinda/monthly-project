import Header from "./Components/Header";
import Home from "./Pages/Home/Home";
import Destinations from "./Pages/Destinations/Destinations";
import Footer from "./Components/Footer/Footer";
import Triptypes from "./Pages/Trip types/Trip types";
import Contact from "./Pages/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/destinations" element={<Destinations/>}/>
          <Route path="/trip types" element={<Triptypes/>}/>
          <Route path="/contact us" element={<Contact/>}/>
          
        </Routes>
        
      <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
