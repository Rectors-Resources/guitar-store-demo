import "./navbar.css";
import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function NavBar() {
  const [input, setInput] = useState();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You just searched ${input}`);
  };
  return (
    <>
      <header>
        <nav>
          <ul className="top-nav">
            <svg
              className="guitar-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              onClick={() => {
                navigate("/");
              }}
            >
              <path d="M502.7 39.02L473 9.37c-12.5-12.5-32.74-12.49-45.24 .0106l-46.24 46.37c-3.875 3.875-6.848 8.506-8.598 13.76l-12.19 36.51L284.5 182.3C272.4 173.5 259 166.5 244.4 163.1C211 155.4 177.4 162.3 154.5 185.1C145.3 194.5 138.3 206 134.3 218.6C128.3 237.1 111.1 251.3 92.14 253C68.52 255.4 46.39 264.5 29.52 281.5c-45.62 45.5-37.38 127.5 18.12 183c55.37 55.38 137.4 63.51 182.9 18c16.1-16.88 26.25-38.85 28.5-62.72c1.75-18.75 15.84-36.16 34.47-42.16c12.5-3.875 24.03-10.87 33.4-20.25c22.87-22.88 29.75-56.38 21.1-89.76c-3.375-14.63-10.39-27.99-19.14-40.11l76.25-76.26l36.53-12.17c5.125-1.75 9.894-4.715 13.77-8.59l46.36-46.29C515.2 71.72 515.2 51.52 502.7 39.02zM208 352c-26.5 0-48-21.5-48-48c0-26.5 21.5-48 48-48s47.1 21.5 47.1 48C256 330.5 234.5 352 208 352z" />
            </svg>
            <Link to="/" className="nav-item nav-button">
              Home
            </Link>
            <Link className="nav-item nav-button" to="/products/all/all">
              Products
            </Link>
            <Link className="nav-item nav-button" to="/contact">
              Contact
            </Link>
            <Link className="nav-item nav-button" to="/sign-in">
              Sign In
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="nav-item cart-svg"
              onClick={() => {
                navigate("/cart");
              }}
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </ul>
          <form className="search-area" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search"
              className="search-bar"
              name="search"
              value={input}
              onChange={handleChange}
            />

            <input
              type="submit"
              value="Search"
              className="search-btn"
              
            />
          </form>
        </nav>
      </header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
