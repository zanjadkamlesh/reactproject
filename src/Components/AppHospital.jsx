import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Home, About } from "./Home";
import { Doctor } from "./Doctor";
import { Patient } from "./Patient";
import { Appointment } from "./Home copy";

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
