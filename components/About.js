const About = () => {
  return (
    <>
      <header>
        <div className="col-2">
          <div className="about-page" id="about-page">
            <div className="about-label">
              <h1>
                <span style={{ color: "var(--yellow)" }}>about </span>me
              </h1>
            </div>

            <div className="container-2">
              <div className="details">
                <ul>
                  <li>
                    name:
                    <span style={{ color: "var(--yellow)" }}> saqib ali</span>
                  </li>
                  <li>
                    age:<span style={{ color: "var(--yellow)" }}> 22</span>
                  </li>
                  <li>
                    qualification:
                    <span style={{ color: "var(--yellow)" }}> bscs</span>
                  </li>
                  <li>
                    post:
                    <span style={{ color: "var(--yellow)" }}>
                      frnot end developer
                    </span>
                  </li>
                  <li>
                    language:
                    <span style={{ color: "var(--yellow)" }}> urdu</span>
                  </li>
                </ul>
              </div>
              <div className="details-button">
                <div className="button-info">
                  <div className="items">
                    <h1>
                      <span style={{ color: "var(--yellow)" }}>2+</span>
                    </h1>
                    <p>year of experience</p>
                  </div>
                  <div className="items">
                    <h1>
                      <span style={{ color: "var(--yellow)" }}>100+</span>
                    </h1>
                    <p>projects completed</p>
                  </div>
                </div>
                <div className="button-info">
                  <div className="items">
                    <h1>
                      <span style={{ color: "var(--yellow)" }}>140+</span>
                    </h1>
                    <p>happy customers</p>
                  </div>
                  <div className="items">
                    <h1>
                      <span style={{ color: "var(--yellow)" }}>10+</span>
                    </h1>
                    <p>awards won</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default About;
