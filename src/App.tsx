import { Container, Col, Row } from 'react-bootstrap';
import Header from './components/Header';
import { Link, Route, Routes } from 'react-router-dom';
import Attractions from './pages/Attractions';
import FoodDrink from './pages/FoodDrink';
import Relaxation from './pages/Relaxation';
import Sightseeing from './pages/Sightseeing';

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col><Header /></Col>
          <Col>
          <nav>
            <ul>
              <li><Link to='/attractions'>Attractions</Link></li>
              <li><Link to='/sights'>Sightseeing</Link></li>
              <li><Link to='/food'>Food & Drink</Link></li>
              <li><Link to='/relax'>Relaxation</Link></li>
            </ul>
          </nav>
          </Col>
        </Row>
      </Container>

      <Routes>
        <Route path='/attractions' element={<Attractions />} />
        <Route path='/sights' element={<Sightseeing />} />
        <Route path='/food' element={<FoodDrink />} />
        <Route path='/relax' element={<Relaxation />} />
      </Routes>
    </>
  );
}

export default App;
