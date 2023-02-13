import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
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

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          {/* <Navigation/> */}
          <Navbar/>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/products' element={<CarExplore/>} />
          <Route path='/testimonials' element={<Testimonials/>} />
          <Route
            path="/cars/buying/:buyingId"
            element={
              <PrivateRoute>
                <CarDetails />
              </PrivateRoute>
            }
          />
           <Route path='/login' element={<Login/>} />
           <Route path='/register' element={<Register/>} />
           <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          </Routes>
          <Footer/>
        </Router>
      </AuthProvider>
    </div>

  );
}

export default App;
