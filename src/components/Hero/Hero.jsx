import "./hero.css";

export default function Hero() {
  return (
    <section className="hero-banner">
      <div className="text-container">
        <h1 className="hero-text">Welcome the Strat Shack!</h1>
        <p>Modern musical equipment with old fashioned customer service.</p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80"
        alt="Rocker playing headless guitar on top of an amp"
        className="hero-img"
      />
    </section>
  );
}
