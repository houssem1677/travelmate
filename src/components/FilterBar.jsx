import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function FilterBar({ onFilterChange }) {
  const priceRanges = ["All", "free", "cheap", "moderate", "expensive"];
  const types = [
    "All",
    "architecture",
    "boat",
    "cinema",
    "college",
    "concerthall",
    "entertainment",
    "museum",
    "nightclub",
    "park",
    "swimmingpool",
    "theatre"
  ];
  const areas = ["All", "centre", "east", "west", "south", "north"];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <Form className="mb-4">
      <Row className="g-3">
        <Col md={4}>
          <Form.Group>
            <Form.Label>Price Range</Form.Label>
            <Form.Select name="pricerange" onChange={handleFilterChange}>
              {priceRanges.map((range) => (
                <option key={range} value={range}>
                  {range.charAt(0).toUpperCase() + range.slice(1)}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Type</Form.Label>
            <Form.Select name="type" onChange={handleFilterChange}>
              {types.map((type) => (
                <option key={type} value={type}>
                  {type === "All"
                    ? "All"
                    : type === "multiple sports"
                    ? "Multiple Sports"
                    : type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Area</Form.Label>
            <Form.Select name="area" onChange={handleFilterChange}>
              {areas.map((area) => (
                <option key={area} value={area}>
                  {area.charAt(0).toUpperCase() + area.slice(1)}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}