import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function AttractionDetails({ attractions }) {
  const { id } = useParams();
  const attraction = attractions.find((a) => a.id === id);

  if (!attraction) return <div>Attraction not found</div>;

  const {
    name,
    address,
    area,
    type,
    pricerange,
    entrance_fee,
    openhours,
    phone,
    postcode,
  } = attraction;

  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {type.charAt(0).toUpperCase() + type.slice(1)} • {area}
        </Card.Subtitle>
        <ListGroup variant="flush">
          <ListGroup.Item><strong>Address:</strong> {address}</ListGroup.Item>
          <ListGroup.Item><strong>Area:</strong> {area}</ListGroup.Item>
          <ListGroup.Item><strong>Type:</strong> {type}</ListGroup.Item>
          <ListGroup.Item><strong>Entrance Fee:</strong> {entrance_fee}</ListGroup.Item>
          <ListGroup.Item><strong>Price Range:</strong> {pricerange}</ListGroup.Item>
          <ListGroup.Item><strong>Opening Hours:</strong> {openhours}</ListGroup.Item>
          <ListGroup.Item><strong>Phone:</strong> {phone}</ListGroup.Item>
          <ListGroup.Item><strong>Postcode:</strong> {postcode}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
