import React from "react";

function Navbar() {
      return (
            <nav className="navbar navbar-expand-lg navbar-light navbar-floating">
                  <div className="container">
                        <a className="navbar-brand" href="/#">
                              <img src="https://helpimal.com/assets/favicon.png" alt="" width="40" />
                        </a>
                        <button
                              className="navbar-toggler"
                              type="button"
                              data-toggle="collapse"
                              data-target="#navbarToggler"
                              aria-controls="navbarToggler"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                        >
                              <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarToggler">
                              <ul className="navbar-nav ml-lg-5 mt-3 mt-lg-0">
                                    <li className="nav-item dropdown active">
                                          <a className="nav-link" href="/#">
                                                Anasayfa
                                          </a>
                                    </li>
                                    <li className="nav-item">
                                          <a className="nav-link" href="/#">
                                                Hakkımızda
                                          </a>
                                    </li>

                                    <li className="nav-item">
                                          <a className="nav-link" href="/#">
                                                İletişim
                                          </a>
                                    </li>
                              </ul>
                              <div className="ml-auto my-2 my-lg-0">
                                    <button onClick={(e) => e} className="btn btn-dark rounded-pill">
                                          Şimdi İndir
                                    </button>
                              </div>
                        </div>
                  </div>
            </nav>
      );
}

export default Navbar;
