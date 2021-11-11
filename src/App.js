import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CarExplore from "./Pages/CarExplore/CarExplore";
import Home from "./Pages/Home/Home/Home";
import CarDetails from "./Pages/Home/Products/CarDetails/CarDetails";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";

function App() {
  return (
    <div>
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
          <Route path='/cars/buying/:buyingId'>
            <CarDetails></CarDetails>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
