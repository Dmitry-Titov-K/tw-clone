import React from "react";
import { Singin } from "./pages/Singin";
import { Home } from "./pages/Home";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/" component={Singin} />
      </Switch>
    </div>
  );
}

export default App;
