import "./App.css";
import SignIn from "./components/SignIn";
import Login from "./components/login";

function App() {
      return (
            <div className="App">
                  <div className="sign">
                        <div>
                              {/* <h1>mali</h1> */}

                              <SignIn />
                        </div>
                  </div>
                  <div className="login">
                        <Login />
                  </div>
            </div>
      );
}

export default App;
