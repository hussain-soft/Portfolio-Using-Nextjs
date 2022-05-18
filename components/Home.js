import Link from "next/Link";
const Home = () => {
  return (
    <>
      <header>
        <div className="col-2">
          <div className="container-1" id="home-page">
            <div className="intro">
              <h3>hi there ...!</h3>
              <h1>
                i'm
                <span style={{ color: "var(--yellow)" }}>
                  {" "}
                  muhammad hussain
                </span>
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="social-links">
              <div className="links">
                <Link href="/">
                  <a>
                    <i className="fa fa-brands fa-facebook-f"></i>
                  </a>
                </Link>
              </div>
              <div className="links">
                <Link href="/">
                  <a>
                    <i className="fa fa-brands fa-instagram"></i>
                  </a>
                </Link>
              </div>
              <div className="links">
                <Link href="/">
                  <a>
                    <i className="fa fa-brands fa-linkedin"></i>
                  </a>
                </Link>
              </div>
              <div className="links">
                <Link href="/">
                  <a>
                    <i className="fa fa-brands fa-github"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
