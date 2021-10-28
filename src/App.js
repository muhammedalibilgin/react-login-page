import Login from "./components/login";
import UserInterface from "./components/userInterface/userInterface";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
      return (
            <Router>
                  <div className="App">
                        <Switch>
                              <Route exact path="/" children={<Home />} />
                              <Route path="/userInterface" component={UserInterface} />
                        </Switch>
                  </div>
            </Router>
      );
}

function Home() {
      return (
            <div>
                  <div className="login">
                        <Login />
                  </div>
            </div>
      );
}
