import React from "react";
import Footer from "./Footer";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Carousel,
  CardGroup,
  Card,
  Container,
  Button,
  ButtonGroup,
  Badge
} from "react-bootstrap";
import "./App.css";
function App() {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          Strong <span class="color-brand">Skin</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Detect skin type</Nav.Link>
            <Nav.Link href="#link">Strong health</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Product</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Product 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Product 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Product 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="./slide1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./slide2.jpg" alt="Third slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./slide3.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1>Shop by skin type</h1>
      <div className="d-flex flex-column">
        <ButtonGroup size="lg">
          <Button variant="danger">Shop by skin type 1</Button>
          <Button variant="danger">Shop by skin type 2</Button>
          <Button variant="danger">Shop by skin type 3</Button>
        </ButtonGroup>
      </div>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="./card1.jpg" />
          <Card.Body>
            <Card.Title>Product 1</Card.Title>
            <Card.Text>A best seller product</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">$20</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="./card2.jpg" />
          <Card.Body>
            <Card.Title>Product 2</Card.Title>
            <Card.Text>This card has supporting</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">$30</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="./card3.jpg" />
          <Card.Body>
            <Card.Title>Product 3</Card.Title>
            <Card.Text>This is a wider card with supporting text</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">$50</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <h1>Advice from skin care experts</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <video
              controls
              autoPlay
              src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
            />
            <h3>Temp video</h3>
          </div>
          <div className="col-sm">
            <video
              controls
              autoPlay
              src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
            />
            <h3>Temp video</h3>
          </div>
          <div className="col-sm">
            <video
              controls
              autoPlay
              src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
            />
            <h3>Temp video</h3>
          </div>
          <div className="col-sm">
            <video
              controls
              autoPlay
              src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
            />
            <h3>Temp video</h3>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default App;
