import "./deal-card.css";

export default function DealCard(props) {
  return (
    <div className="deal-card">
      <img src={props.img} alt={`${props.itemName}`} className="deal-img" />
      <p>{props.itemName}</p>
      <p>${props.price}</p>
      <div className="bkgrnd-div">
        <button>Buy Now</button>
        <br />
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
