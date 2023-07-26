import "./weeks-deals.css";
import DealCard from "./DealCard/DealCard";
import { thisWeeksDeals } from "./thisWeeksDeals";

export default function WeeksDeals() {
    


  return (
    <section className="deals-section">
      <h2>Shop this weeks newest deals.</h2>
      <div className="deal-card-holder">
        {thisWeeksDeals.map(item => {
           return <DealCard itemName={item.name} price={item.price} img={item.img}/>
        })}
      </div>
      

    </section>
  );
}
