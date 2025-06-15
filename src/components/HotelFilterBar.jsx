import React from "react";
import { Form } from "react-bootstrap";

export default function HotelFilterBar({ onFilterChange }) {
  const priceRanges = ["All", "cheap", "moderate", "expensive"];
  const areas = ["All", "centre", "east", "west", "south", "north"];
  const stars = ["All", "1", "2", "3", "4", "5"];

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
        <Form.Label>Area</Form.Label>
        <Form.Select name="area" onChange={handleChange}>
          {areas.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Stars</Form.Label>
        <Form.Select name="stars" onChange={handleChange}>
          {stars.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </Form.Select>
      </Form.Group>
    </Form>
  );
}
