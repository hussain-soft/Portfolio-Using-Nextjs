import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="col-1">
          <div className="user">
            <img
              src="https://cdn.pixabay.com/photo/2015/03/03/20/42/man-657869__340.jpg"
              alt="user-img-err"
            />
            <h1>muhammad hussain</h1>
            <p>front end developer</p>
          </div>
          <nav>
            <ul>
              <li>
                <Link href="#home-page">
                  <a>home</a>
                </Link>
              </li>
              <li>
                <Link href="#about-page">
                  <a>about</a>
                </Link>
              </li>
              <li>
                <Link href="#edu">
                  <a>education </a>
                </Link>
              </li>
              <li>
                <Link href="#services">
                  <a>services</a>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <a>contact us</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
