import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarExplore from "./Pages/CarExplore/CarExplore";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import CarDetails from "./Pages/Home/Products/CarDetails/CarDetails";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Testimonials from "./Pages/Testimonials/Testimonials";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Navbar from "./Pages/Shared/Navigation/NavBar";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
        <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/testimonials" element={<Testimonials />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cars" element={<CarExplore />} />
            <Route path="/cars/buying/:buyingId" element={<CarDetails />} />
        

          <React.Fragment path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route path="" element={<Dashboard />}></Route>
              <Route  path="dashboard/*" element={<Dashboard />}></Route>
          </React.Fragment>
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
