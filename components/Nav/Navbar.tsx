"use strict";

export default function () {
  return (
    <>
      <div className="mt-3">
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <div className="collapse navbar-collapse justify-content-center">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="/github"
                  >
                    Github
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="/discord"
                  >
                    Discord
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="/rants/webmaster"
                  >
                    Webmaster
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="/rants/words"
                  >
                    Words
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
