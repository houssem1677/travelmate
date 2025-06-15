import React, { useState, useMemo } from "react";
import FilterBar from "../components/FilterBar";
import Attractions from "../components/Attractions";
import data from "../data/attraction_db.json";

export default function Discover() {
  const [filters, setFilters] = useState({
    type: "All",
    area: "All",
    pricerange: "All",
  });

  function handleFilterChange(name, value) {
    setFilters((prev) => {
      if (name === "type") {
        return { type: value, area: "All", pricerange: "All" };
      } else if (name === "area") {
        return { ...prev, area: value, pricerange: "All" };
      } else {
        return { ...prev, pricerange: value };
      }
    });
  }

  const filteredByType = useMemo(() => {
    if (filters.type === "All") return data;
    return data.filter(
      (item) => item.type.toLowerCase() === filters.type.toLowerCase()
    );
  }, [filters.type]);

  const filteredByArea = useMemo(() => {
    if (filters.area === "All") return filteredByType;
    return filteredByType.filter(
      (item) => item.area.toLowerCase() === filters.area.toLowerCase()
    );
  }, [filters.area, filteredByType]);

  const filteredByPrice = useMemo(() => {
    if (filters.pricerange === "All") return filteredByArea;

    const priceMap = {
      free: (p) => p === "free" || p === "0",
      cheap: (p) => ["cheap", "1", "2"].includes(p.toLowerCase()),
      moderate: (p) => ["moderate", "3", "4"].includes(p.toLowerCase()),
      expensive: (p) => ["expensive", "5", "6"].includes(p.toLowerCase()),
    };

    return filteredByArea.filter((item) =>
      priceMap[filters.pricerange]
        ? priceMap[filters.pricerange](item.pricerange.toLowerCase())
        : true
    );
  }, [filters.pricerange, filteredByArea]);

  return (
    <div>
      <h1>Discover UK Attractions</h1>
      <FilterBar onFilterChange={handleFilterChange} />
      <Attractions attractions={filteredByPrice} />
    </div>
  );
}
