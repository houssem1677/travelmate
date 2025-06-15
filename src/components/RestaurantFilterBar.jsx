import React from "react";
import { Form } from "react-bootstrap";

export default function RestaurantFilterBar({ onFilterChange }) {
  const priceRanges = ["All", "cheap", "moderate", "expensive"];
  const foodTypes = ["All", "italian", "indian", "chinese", "international"];
  const areas = ["All", "centre", "east", "west", "south", "north"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Price Range</Form.Label>
        <Form.Select name="pricerange" onChange={handleChange}>
          {priceRanges.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Food Type</Form.Label>
        <Form.Select name="food" onChange={handleChange}>
          {foodTypes.map((f) => (
            <option key={f} value={f}>{f}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Area</Form.Label>
        <Form.Select name="area" onChange={handleChange}>
          {areas.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </Form.Select>
      </Form.Group>
    </Form>
  );
}
