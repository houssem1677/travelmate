import React, { useState } from 'react';
import trainData from '../data/train_db.json';
import { Card, Form, Row, Col } from 'react-bootstrap';

export default function TrainSchedule() {
    const [filters, setFilters] = useState({
        day: "monday",
        departure: "All",
        destination: "All",
        maxPrice: ""
    });

    const uniqueDays = [...new Set(trainData.map(t => t.day))];
    const uniqueDepartures = [...new Set(trainData.map(t => t.departure))];
    const uniqueDestinations = [...new Set(trainData.map(t => t.destination))];

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const filteredTrains = trainData.filter(train => {
        const matchDay = train.day === filters.day;
        const matchDep = filters.departure === "All" || train.departure === filters.departure;
        const matchDest = filters.destination === "All" || train.destination === filters.destination;
        const matchPrice = !filters.maxPrice || parseFloat(train.price) <= parseFloat(filters.maxPrice);
        return matchDay && matchDep && matchDest && matchPrice;
    });

    return (
        <div className="container mt-4">
            <h2>🚆 Train Schedule</h2>

            <Form className="mb-4">
                <Row className="g-3">
                    <Col md={3}>
                        <Form.Group>
                            <Form.Label>Day</Form.Label>
                            <Form.Select name="day" value={filters.day} onChange={handleFilterChange}>
                                {uniqueDays.map(day => (
                                    <option key={day} value={day}>{day.charAt(0).toUpperCase() + day.slice(1)}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <Form.Label>Departure</Form.Label>
                            <Form.Select name="departure" value={filters.departure} onChange={handleFilterChange}>
                                <option value="All">All</option>
                                {uniqueDepartures.map(dep => (
                                    <option key={dep} value={dep}>{dep}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <Form.Label>Destination</Form.Label>
                            <Form.Select name="destination" value={filters.destination} onChange={handleFilterChange}>
                                <option value="All">All</option>
                                {uniqueDestinations.map(dest => (
                                    <option key={dest} value={dest}>{dest}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <Form.Label>Max Price (£)</Form.Label>
                            <Form.Control
                                type="number"
                                name="maxPrice"
                                value={filters.maxPrice}
                                onChange={handleFilterChange}
                                placeholder="e.g. 30"
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>

            {filteredTrains.length === 0 && <p>No trains match your filters.</p>}

            <Row>
                {filteredTrains.map((train, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Body>
                                <Card.Title>{train.departure} ➡️ {train.destination}</Card.Title>
                                <Card.Text>
                                    <strong>Train ID:</strong> {train.trainID} <br />
                                    <strong>Departure:</strong> {train.leaveAt} &nbsp;
                                    <strong>Arrival:</strong> {train.arriveBy} <br />
                                    <strong>Duration:</strong> {train.duration} <br />
                                    <strong>Price:</strong> £{train.price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
