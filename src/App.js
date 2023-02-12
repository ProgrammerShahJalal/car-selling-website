import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CarExplore from "./Pages/CarExplore/CarExplore";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import CarDetails from "./Pages/Home/Products/CarDetails/CarDetails";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Testimonials from "./Pages/Testimonials/Testimonials";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AuthProvider from './contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/products'>
              <CarExplore></CarExplore>
            </Route>
            <Route path='/testimonials'>
              <Testimonials></Testimonials>
            </Route>
            <PrivateRoute path='/cars/buying/:buyingId'>
              <CarDetails></CarDetails>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>

  );
}

export default App;
