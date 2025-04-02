import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./Pages/Hero";
import Footer from "./components/Footer";
import Sell from "./Pages/Sell";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import About from "./Pages/About";
import Privacy from "./Pages/Privacy";
import Help from "./Pages/Help";
import AuthPage from "./Pages/Auth/Signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/detail" element={<Page2 />} />
        <Route path="/detail1" element={<Page3 />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/help" element={<Help />} />
        <Route path="/signup" element={<AuthPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
