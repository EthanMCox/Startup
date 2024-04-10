import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Login } from "./login/login";
import { Play } from "./play/play";
import { Scores } from "./scores/scores";
import { About } from "./about/about";
import { AuthState } from "./login/authState";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function App() {
  const [userName, setUserName] = React.useState(
    localStorage.getItem("userName") || ""
  );
  const currentAuthState = userName
    ? AuthState.Authenticated
    : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div className="app bg-dark text-light">
        <header className="container-fluid">
          <nav className="navbar navbar-dark">
            <h3 className="logo">Make a Match</h3>
            <menu className="navbar-nav">
              <li className="nav-item navPaddingLeft">
                <NavLink className="nav-link" to='/'>
                  Login
                </NavLink>
              </li>
              {authState === AuthState.Authenticated && (
                <li className="nav-item navPaddingLeft">
                  <NavLink className="nav-link" to="play">
                    Play
                  </NavLink>
                </li>
              )}
              {authState === AuthState.Authenticated && (
                <li className="nav-item navPaddingLeft">
                  <NavLink className="nav-link" to="scores">
                    Scores
                  </NavLink>
                </li>
              )}
              <li className="nav-item">
                <NavLink className="nav-link active" to="about">
                  About
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setUserName(userName);
                  setAuthState(authState);
                }}
              />
            }
            exact
          />
          <Route path="play" element={<Play userName={userName} />} />
          <Route path="scores" element={<Scores />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="bg-dark text-white-50">
          <div className="container-fluid">
            <a
              className="text-reset removeLinkStyle"
              href="https://www.linkedin.com/in/ethanmcox/"
            >
              Ethan Cox
            </a>
            <a
              className="text-reset removeLinkStyle right-align"
              href="https://github.com/EthanMCox/Startup"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Page Not Found</main>;
}

export default App;
