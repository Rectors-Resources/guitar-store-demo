import { useEffect, useState } from "react";
import "./product-page.css";
import { Outlet, useNavigate } from "react-router-dom";

export default function ProductPage() {
  const [filter, setFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const navigate = useNavigate();
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const handletTypeFilterChange = (e) => {
    setTypeFilter(e.target.value);
  };
  useEffect(() => {
    navigate(`/products/${filter}/${typeFilter}`);
  }, [filter, typeFilter]);

  return (
    <>
      <div className="filter-container">
        <div className="">
          <label htmlFor="brand-filter">Filter by Brand:</label>
          <select name="brand-filter" onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="Gibson">Gibson</option>
            <option value="Fender">Fender</option>
            <option value="Jackson">Jackson</option>
            <option value="Ibanez">Ibanez</option>
          </select>
        </div>
        <div>
          <label htmlFor="type-filter">Filter by Type:</label>
          <select name="type-filter" onChange={handletTypeFilterChange}>
            <option value="all">All</option>
            <option value="guitar">Guitar</option>
            <option value="bass">Bass</option>
          </select>
        </div>
      </div>
      <Outlet />
    </>
  );
}
