import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
  const navigate = useNavigate();

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{restaurant.food} - {restaurant.pricerange}</Card.Subtitle>
        <Card.Text>{restaurant.introduction || "No description available."}</Card.Text>
        <Button variant="primary" onClick={() => navigate(`/restaurants/${restaurant.id}`)}>
          See More
        </Button>
      </Card.Body>
    </Card>
  );
}
