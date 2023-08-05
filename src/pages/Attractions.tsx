import { Button, Card, Row, Col, Container, Modal } from "react-bootstrap";
import { attractions } from "../libs/attractions";
import { useState } from "react";

export default function Attraction() {
  const [learnMore, setLearnMore] = useState<number | null>(null);
  const handleClose = () => setLearnMore(null);
  const handleShow = (id:number | null) => setLearnMore(id);
  
  return (
    <Container fluid>
      <Row xs={2} sm={2} md={2} lg={3} xl={4} className='d-flex justify-content-center'>
        {attractions.map((item) => (
          <Col className='mb-3 d-flex align-items-stretch' key={item.id}>
          <Card>
            <Card.Img variant='top' className='img-fluid' src={item.imgSrc} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button variant='info' onClick={() => handleShow(parseInt(item.id))} key={item.id}>Learn More</Button>
            </Card.Body>
            <Modal
              show={learnMore === parseInt(item.id)}
              onHide={handleClose}
              centered
              size="lg"
              key={item.id}
            >
              <Modal.Header closeButton>
                <Modal.Title>{item.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {item.inDepth.map((data, index) => (
                  <p key={index}>{data}</p>
                ))}
                <div className="d-flex flex-wrap justify-content-center">
                {item.cost.map((data, index) => (
                  <ul key={index} className="list-group">
                    <li className="list-group-item">{data}</li>
                  </ul>
                ))}
                </div>
              </Modal.Body>
              <Modal.Footer className="d-flex justify-content-around gap-1">
                <Modal.Dialog>
                  <span className="p-3">{item.address}</span>
                </Modal.Dialog>
                <Button
                  variant="outline-primary"
                  href={item.website}
                  className="py-3 px-5 d-flex flex-fill"
                  target="_blank"
                >
                  <span className="w-100 text-center">
                    Visit Website
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-up-right-square ps-2" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                    </svg>
                  </span>
                </Button>
              </Modal.Footer>
            </Modal>
          </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}