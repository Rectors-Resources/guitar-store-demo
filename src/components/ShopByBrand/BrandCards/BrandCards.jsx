import "./brand-cards.css";

export default function BrandCards(props) {
  return (
    <div className="brand-card" style={{backgroundImage: `${props.img}`}}>
      <img src={props.img} alt={`Multiple ${props.brand} guitars`} className="brand-img"/>
      <p className="img-text">{props.brand}</p>
    </div>
  );
}
