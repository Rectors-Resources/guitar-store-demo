import "./navbar.css";
import searchSVG from "../../assets/search.svg";

export default function NavBar() {
  return (
    <header>
      <nav>
        <ul className="top-nav">
          <img
            src="https://static.vecteezy.com/system/resources/previews/011/336/543/original/guitar-pick-and-guitar-head-for-music-instrument-logo-vector.jpg"
            className="nav-img"
          />
          <li className="nav-item nav-button">All Products</li>
          <li className="nav-item nav-button">Contact</li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="nav-item cart-svg"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </ul>
        <div className="search-area">
          <input type="text" placeholder="Search" className="search-bar" />
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
            className="search-svg"
          >
            <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z" />
          </svg>
        </div>
      </nav>
    </header>
  );
}
