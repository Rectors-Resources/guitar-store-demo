import "./hero.css";

export default function Hero() {
  return (
    <section className="hero-banner">
            <h1 className="hero-text">Anyone can be a rock star at the Strat Shack!</h1>
      <img
        src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80"
        alt="Rocker playing headless guitar on top of an amp"
        className="hero-img"
      />
    </section>
  );
}
