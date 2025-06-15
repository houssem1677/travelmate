import React, { useState } from "react";
import data from "../data/hotel_db.json";
import HotelCard from "./HotelCard";
import HotelFilterBar from "./HotelFilterBar";

export default function HotelBooking() {
  const [filters, setFilters] = useState({ pricerange: "All", area: "All", stars: "All" });

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredData = data.filter((hotel) => {
    return (
      (filters.pricerange === "All" || hotel.pricerange === filters.pricerange) &&
      (filters.area === "All" || hotel.area === filters.area) &&
      (filters.stars === "All" || hotel.stars === filters.stars)
    );
  });

  return (
    <div className="d-flex">
      <div className="flex-grow-1">
        {filteredData.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
      <div style={{ width: "300px", marginLeft: "20px" }}>
        <HotelFilterBar onFilterChange={handleFilterChange} />
      </div>
    </div>
  );
}
