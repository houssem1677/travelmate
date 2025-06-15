import React from "react";
import AttractionCard from "./AttractionCard";

export default function Attractions({ attractions }) {
  return (
    <div className="container mt-4">
      <div className="row">
        {attractions.map((attraction) => (
          <div className="col-md-4 mb-4" key={attraction.id}>
            <AttractionCard attraction={attraction} />
          </div>
        ))}
      </div>
    </div>
  );
}
