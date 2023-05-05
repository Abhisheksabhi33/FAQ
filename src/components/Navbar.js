import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">

        <a
          className="navbar-brand mx-4"
          href="/"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src="https://amardesigner.com/static/media/LogoDark.830bd987673acf6318a940f2b1c1908a.svg"
            alt="logo"
            style={{ height: "30px", marginRight: "10px" }}
          />
          <div>
            <h3
              className="font-mulish font-bold text-xl sm:text-xs"
              style={{
                fontFamily: "mulish",
                fontWeight: "bold",
                fontSize: "1.25rem",
                margin: 0,
              }}
            >
              Amar Designer
            </h3>
            <p style={{ margin: 0, fontSize: "0.75rem" }}>
              You Dream, We Design
            </p>
          </div>
        </a>

        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarCenteredExample"
          aria-controls="navbarCenteredExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="container-fluid navbar-expand-lg">

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarCenteredExample"
          >

            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Posts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Find Professional
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Design Ideas
                </a>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-danger mx-2">
                  Sign In
                </button>
                <button type="button" className="btn btn-danger mx-2">
                  Join as Pro
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
