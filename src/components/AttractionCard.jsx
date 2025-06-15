import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AttractionCard({ attraction }) {
    if (!attraction) return null;

    const { name, type, area, openhours, id } = attraction;

    
    const briefDescription = openhours !== "?"
        ? openhours.length > 60 ? `${openhours.substring(0, 57)}...` : openhours
        : "Opening hours not specified.";

    return (
        <Card className="shadow-sm h-100 d-flex flex-column">
            <Card.Body className="d-flex flex-column">
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {type.charAt(0).toUpperCase() + type.slice(1)} • {area}
                </Card.Subtitle>
                <Card.Text className="flex-grow-1">{briefDescription}</Card.Text>
                <Link to={`/attractions/${id}`} className="mt-auto">
                    <Button variant="primary">See More</Button>
                </Link>
            </Card.Body>
        </Card>

    );
}