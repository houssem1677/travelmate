import React, { useState } from "react";
import data from "../data/restaurant_db.json";
import FilterBar from "./RestaurantFilterBar";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantBooking() {
  const [filters, setFilters] = useState({ pricerange: "All", area: "All", food: "All" });

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredData = data.filter((item) => {
    return (
      (filters.pricerange === "All" || item.pricerange === filters.pricerange) &&
      (filters.area === "All" || item.area === filters.area) &&
      (filters.food === "All" || item.food === filters.food)
    );
  });

  return (
    <div className="d-flex">
      <div className="flex-grow-1">
        {filteredData.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>
      <div style={{ width: "300px", marginLeft: "20px" }}>
        <FilterBar onFilterChange={handleFilterChange} />
      </div>
    </div>
  );
}
