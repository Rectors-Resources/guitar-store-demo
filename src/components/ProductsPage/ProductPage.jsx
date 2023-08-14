import { useEffect, useState } from "react";
import "./product-page.css";
import SingleProductCard from "./SingleProductCard/SingleProductCard";
import { Outlet, useNavigate } from "react-router-dom";

export default function ProductPage() {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate()
  const handleFilterChange = (e) => {
    setFilter(e.target.value)
    
  }
  useEffect(() => {
    navigate(`${filter}`)
  }, [filter])

  return (
    <>
      <div className="sidebar">
        <label htmlFor="brand-filter">Filter by Brand</label>
        <select name="brand-filter" onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="Gibson">Gibson</option>
            <option value="Fender">Fender</option>
            <option value="Jackson">Jackson</option>
            <option value="Ibanez">Ibanez</option>
        </select>
      </div>
      <Outlet/>
      
    </>
  );
}
