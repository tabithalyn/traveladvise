import { Button, Card, Row, Col, Container } from "react-bootstrap";

export default function Attractions() {

  return (
    <Container fluid>
    <Row sm={2} md={3} lg={3} xl={5} className='d-flex justify-content-center'>
      <Col className='mb-3 d-flex align-items-stretch'>
      <Card>
        <Card.Img variant='top' className='img-fluid' src='src/assets/img/london-eye.png' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu sodales sapien, non hendrerit odio. Curabitur a nibh ultrices, maximus purus at, tincidunt massa.
          </Card.Text>
          <Button variant='primary'>Learn More</Button>
        </Card.Body>
      </Card>
      </Col>

      <Col className='col-sm mb-3 d-flex align-items-stretch'>
      <Card>
        <Card.Img variant='top' className='img-fluid' src='src/assets/img/tower-london.png' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu sodales sapien, non hendrerit odio.
          </Card.Text>
          <Button variant='primary'>Learn More</Button>
        </Card.Body>
      </Card>
      </Col>

      <Col className='col-sm mb-3 d-flex align-items-stretch'>
      <Card>
        <Card.Img variant='top' src='' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            This is the information about the attraction.
          </Card.Text>
          <Button variant='primary'>Learn More</Button>
        </Card.Body>
      </Card>
      </Col>

      <Col className='col-sm mb-3 d-flex align-items-stretch'>
      <Card>
        <Card.Img variant='top' src='' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            This is the information about the attraction.
          </Card.Text>
          <Button variant='primary'>Learn More</Button>
        </Card.Body>
      </Card>
      </Col>

      <Col className='col-sm mb-3 d-flex align-items-stretch'>
      <Card>
        <Card.Img variant='top' src='' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            This is the information about the attraction.
          </Card.Text>
          <Button variant='primary'>Learn More</Button>
        </Card.Body>
      </Card>
      </Col>

      <Col className='col-sm mb-3 d-flex align-items-stretch'>
      <Card>
        <Card.Img variant='top' className='img-fluid' src='src/assets/img/london-eye.png' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu sodales sapien, non hendrerit odio. Curabitur a nibh ultrices, maximus purus at, tincidunt massa.
          </Card.Text>
          <Button variant='primary'>Learn More</Button>
        </Card.Body>
      </Card>
      </Col>
    </Row>
    </Container>
  );
}