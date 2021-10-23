import Login from "./components/login";
import UserInterface from "./components/userInterface/userInterface";
import "./App.css";

import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      const [loginForm, setLoginForm] = useState({});

      if (loginForm.email === "a") {
            // console.log("true a");
            window.location.href = "/userInterface";
      } else {
            // console.log("false false");
      }

      return (
            <div>
                  <Link to="/userInterface">Visit the User Interface </Link>

                  <div className="login">
                        <Login addLoginForm={setLoginForm} />
                  </div>
            </div>
      );
}
