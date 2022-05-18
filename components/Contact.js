import Link from "next/Link";

const Contact = () => {
  return (
    <>
      <header>
        <div className="col-2">
          <div className="contact" id="contact">
            <div className="contact-label">
              <h1>
                <span style={{ color: "var(--yellow)" }}>contact </span>me
              </h1>
            </div>
            <div className="contact-container">
              <div className="contact-info">
                <div className="divv">
                  <h2>
                    contact <span>info</span>
                  </h2>
                </div>
                <ul className="contact-list">
                  <li>
                    <i className="fa fa-solid fa-envelope"></i> xyz@gmail.com
                  </li>
                  <li>
                    <i className="fa fa-solid fa-phone"></i> +92 3325738393
                  </li>
                  <li>
                    <i className="fa fa-solid fa-address-book"></i> isb,
                    pakistan, 66000
                  </li>
                </ul>
              </div>
              <div className="form-info">
                <form action="">
                  <div className="put">
                    <input type="text" placeholder="name" />
                  </div>
                  <div className="put">
                    <input type="text" placeholder="email" />
                  </div>
                  <div className="put">
                    <input type="text" placeholder="project name" />
                  </div>
                  <div className="put">
                    <textarea
                      name=""
                      id=""
                      cols="20"
                      rows="5"
                      placeholder="message"
                    ></textarea>
                  </div>
                  <div className="btn">
                    <button value="submit">
                      submit <i className="fa fa-solid fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer">
              <p>
                All right reserved &copy; | developed by
                <Link href="#">
                  <a> saqib ali</a>
                </Link>
              </p>
              <style jsx>{`
                p {
                  color: white;
                  text-align: center;
                }
              `}</style>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Contact;
