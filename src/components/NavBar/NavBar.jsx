import "./navbar.css";

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
          
          <button className="search-btn">Search</button>
        </div>
      </nav>
    </header>
  );
}
