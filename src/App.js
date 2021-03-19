import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage/Homepage"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact={true} path="/">
          <Homepage />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
