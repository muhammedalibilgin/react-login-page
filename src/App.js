import Login from "./components/login";
import UserInterface from "./components/userInterface/userInterface";
import error404 from "./components/error404";
import "./App.css";

import { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
      const [authorized, setAuthorized] = useState(false);

      useEffect(() => {
            setAuthorized(authorized);
      }, [authorized]);

      return (
            <Router>
                  <div className="App">
                        <Switch>
                              <Route exact path="/">
                                    <div>
                                          <div className="login">
                                                <Login authorized={authorized} setAuthorized={setAuthorized} />
                                          </div>
                                    </div>
                              </Route>

                              <Route path="/userInterface">{() => <UserInterface authorized={authorized} />}</Route>

                              <Route path="*" component={error404} />
                        </Switch>
                  </div>
            </Router>
      );
}
