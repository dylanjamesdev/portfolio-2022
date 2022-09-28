"use strict";

export default function () {
  return (
    <>
      <header className="header-area overlay">
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container">
            <a href="/" className="navbar-brand">
              dylanjames.gay
            </a>

            <button
              type="button"
              className="navbar-toggler collapsed"
              data-toggle="collapse"
              data-target="#main-nav"
            >
              <span className="menu-icon-bar"></span>
              <span className="menu-icon-bar"></span>
              <span className="menu-icon-bar"></span>
            </button>

            <div id="main-nav" className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li>
                  <a href="/" className="nav-item nav-link ">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/github" className="nav-item nav-link">
                    Github
                  </a>
                </li>
                <li>
                  <a href="/discord" className="nav-item nav-link">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="/rants/webmaster" className="nav-item nav-link">
                    Webmaster
                  </a>
                </li>
                <li>
                  <a href="/rants/words" className="nav-item nav-link">
                    Words
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
