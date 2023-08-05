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
  color: black;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:focus, &:visited, &:link, &:active {
    text-decoration: none;
  }
  &:hover {
    color: red;
  }
`;

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col><Header /></Col>
        </Row>
        <Row className='m-1'>
        <Nav className='d-flex justify-content-around mb-2'>
          <div className='py-5 px-3'><StyledLink to='/attractions'>Attractions</StyledLink></div>
          <div className='pt-5'><StyledLink to='/sights'>Sightseeing</StyledLink></div>
          <div className='pt-5'><StyledLink to='/food'>Food & Drink</StyledLink></div>
          <div className='pt-5'><StyledLink to='/relax'>Relaxation</StyledLink></div>
        </Nav>
        </Row>
      </Container>

      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/attractions' element={<Attractions />} />
        <Route path='/sights' element={<Sightseeing />} />
        <Route path='/food' element={<FoodDrink />} />
        <Route path='/relax' element={<Relaxation />} />
      </Routes>
    </>
  );
}

export default App;
