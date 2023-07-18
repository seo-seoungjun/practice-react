import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Details from "./routes/Details";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Details} />
    </HashRouter>
  );
}

export default App;
