import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Home, About } from "./Home";
import { Doctor } from "./Doctor";
import { Patient } from "./Patient";
// import { Appointment } from "./Home copy";
import SystemAdmin from "./SystemAdmin";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";

// import { reducerFunction } from "./Reducer";
// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";

// const store = configureStore({ reducer: reducerFunction });
// console.log("store: ", store)
function App() {
  return (
    <>
      <Header />
      {/* <Provider store={store}> */}
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/patient" element={<Patient />} />
            {/* <Route path="/appointment" element={<Appointment />} /> */}
            <Route path="/systemadmin" element={<SystemAdmin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      {/* </Provider> */}
      <Footer />
    </>
  );
}

export default App;
