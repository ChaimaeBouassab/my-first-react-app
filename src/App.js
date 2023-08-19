import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';  // Import specific components from react-bootstrap


function App() {
  return (
    <>
<Navbar expand="lg" className="bg-body-tertiary"> {/* Navbar with a light background */}
      <Container>
      
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />{/* Toggle button for collapsed navigation */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container className="mt-4"> {/* Container with top margin */}
        <h1>The 3 Best Self-Help Books of All Time to Read at Any Age
</h1>{/* Render an h1 heading */}

<h2> "Reading is a passport to countless adventures, a journey through time and space, and a gift that keeps on giving."</h2>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Book Tittle 1: Atomic Habits by James Clear</Card.Title>
                <Card.Text>
                Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.
                Favorite Quote
“Habits are the compound interest of self-improvement.” — James Clear
                </Card.Text>
              </Card.Body>
            </Card>     {/* Use the Card component to create a card */}

          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Book Tittle 2: Rules for Life by Jordan Peterson</Card.Title>
                <Card.Text>
                12 Rules for Life is a stern, story-based, and entertaining self-help manual for young people that lays out a set of simple principles that can help us become more disciplined, behave better, act with integrity, and balance our lives while enjoying them as much as we can.
Favorite Quote
“It’s all very well to think the meaning of life is happiness, but what happens when you’re unhappy? Happiness is a great side effect. When it comes, accept it gratefully. But it’s fleeting and unpredictable.” — Jordan Peterson
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Book Tittle 3:The Alchemist by Paulo Coelho:</Card.Title>
                <Card.Text>
                
                The Alchemist is a classic novel in which a boy named Santiago embarks on a journey seeking treasure in the Egyptian pyramids after having a recurring dream about it and on the way meets mentors, falls in love, and most importantly, learns the true importance of who he is and how to improve himself and focus on what really matters in life.
                Favorite Quote
“When you want something, all the universe conspires to help you achieve it.” — Paulo Coelho
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
    
    
  );
}

export default App; // Export the App component for use in other parts of the application