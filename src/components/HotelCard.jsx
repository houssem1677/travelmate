import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function HotelCard({ hotel }) {
  const navigate = useNavigate();

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{hotel.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{hotel.type} - {hotel.pricerange} - {hotel.stars}⭐</Card.Subtitle>
        <Card.Text>
          {hotel.internet === "yes" ? "WiFi ✅ " : "WiFi ❌ "} |{" "}
          {hotel.parking === "yes" ? "Parking ✅" : "Parking ❌"}
        </Card.Text>
        <Button variant="primary" onClick={() => navigate(`/hotels/${hotel.id}`)}>
          See More
        </Button>
      </Card.Body>
    </Card>
  );
}
