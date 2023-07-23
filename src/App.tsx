import { Container, Col, Row, Nav } from 'react-bootstrap';
import Header from './components/Header';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Attractions from './pages/Attractions';
import FoodDrink from './pages/FoodDrink';
import Relaxation from './pages/Relaxation';
import Sightseeing from './pages/Sightseeing';
import Home from './pages/Home';

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col><Header /></Col>
        </Row>
        <Row className='m-3'>
        <Nav justify variant='tabs'>
          <div className='p-5'><StyledLink to='/attractions'>Attractions</StyledLink></div>
          <div className='p-5'><StyledLink to='/sights'>Sightseeing</StyledLink></div>
          <div className='p-5'><StyledLink to='/food'>Food & Drink</StyledLink></div>
          <div className='p-5'><StyledLink to='/relax'>Relaxation</StyledLink></div>
        </Nav>
        <Home />
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
