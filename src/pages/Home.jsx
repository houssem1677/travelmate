import HeroBanner from "../components/HeroBanner"; 
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"

export default function Home() {
    return (
        <>
            <HeroBanner />
            <Container className="my-5">
                <h2 className="text-center mb-4">Why Choose TravelMate UK?</h2>
                <Row>
                    <Col md={4}>
                        <h5>🗺️ All in One Platform</h5>
                        <p>Book hotels, find activities, and contact emergency services all in one app.</p>
                    </Col>
                    <Col md={4}>
                        <h5>🧠 Smart Chatbot</h5>
                        <p>Chat like you're talking to a local guide.</p>
                    </Col>
                    <Col md={4}>
                        <h5>🌐 Multilingual</h5>
                        <p>Supports English and French. Easy to use.</p>
                    </Col>
                </Row>
            </Container>
            <Container className="my-5">
                <h2 className="text-center mb-4">Explore Our Top Services</h2>
                <Row>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 text-center shadow-sm">
                            <Card.Body>
                                <div className="fs-1 text-success">📆</div>
                                <Card.Title>Bookings</Card.Title>
                                <Card.Text>Reserve hotels, restaurants, trains, and taxis — all in one place.</Card.Text>
                                <Link to="/bookings" className="btn btn-outline-success">Make a Booking</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 text-center shadow-sm">
                            <Card.Body>
                                <div className="fs-1 text-info">✨</div>
                                <Card.Title>Attractions</Card.Title>
                                <Card.Text>Discover must-see attractions and activities in your area.</Card.Text>
                                <Link to="/discover" className="btn btn-outline-info">Explore</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 text-center shadow-sm">
                            <Card.Body>
                                <div className="fs-1 text-danger">🚨</div>
                                <Card.Title>Emergency Help</Card.Title>
                                <Card.Text>Contact hospitals or police easily in case of emergencies.</Card.Text>
                                <Link to="/emergency" className="btn btn-outline-danger">Get Help</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}