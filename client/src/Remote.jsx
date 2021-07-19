import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  BsArrowLeftShort, BsFillHouseFill, BsArrowUp, BsArrowLeft,
  BsArrowRight, BsArrowDown, BsArrowCounterclockwise, BsGear,
  BsFillPlayFill, BsFillSkipBackwardFill, BsFillSkipForwardFill
} from 'react-icons/bs'


function Remote() {

  const onButtonClick = (val) => {
    const url = '/api/keypress';
    const requestOptions = {
      method: 'post',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ key: val })
    };
    fetch(url, requestOptions)
  }
  
  return (
    <Container>
      <Row className="pt-1">
        <Col className="text-center">
          <Button size="lg" onClick={() => {onButtonClick('Back')}}>
            <BsArrowLeftShort />
          </Button>{' '}
          <Button size="lg" onClick={() => {onButtonClick('Home')}}>
            <BsFillHouseFill />
          </Button>
        </Col>
      </Row>
      <Row className="pt-1">
        <Col className="text-center">
          <Button size="lg" onClick={() => {onButtonClick('Up')}}>
            <BsArrowUp />
          </Button>
        </Col>
      </Row>
      <Row className="pt-1">
        <Col className="text-center">
          <Button size="lg" onClick={() => {onButtonClick('Left')}}>
            <BsArrowLeft />
          </Button>{' '}
          <Button size="lg" onClick={() => {onButtonClick('Select')}}>
            OK
          </Button>{' '}
          <Button size="lg" onClick={() => {onButtonClick('Right')}}>
            <BsArrowRight />
          </Button>{' '}
        </Col>
      </Row>
      <Row className="pt-1">
        <Col className="text-center">
          <Button size="lg" onClick={() => {onButtonClick('Down')}}>
            <BsArrowDown />
          </Button>
        </Col>
      </Row>
      <Row className="pt-1">
        <Col className="text-center">
          <Button size="lg" onClick={() => {onButtonClick('InstantReplay')}}>
            <BsArrowCounterclockwise />
          </Button>{' '}
          <Button size="lg" onClick={() => {onButtonClick('Info')}}>
            <BsGear />
          </Button>
        </Col>
      </Row>
      <Row className="pt-1">
        <Col className="text-center">
          <Button size="lg" onClick={() => {onButtonClick('Rev')}}>
            <BsFillSkipBackwardFill />
          </Button>{' '}
          <Button size="lg" onClick={() => {onButtonClick('Play')}}>
            <BsFillPlayFill />
          </Button>{' '}
          <Button size="lg" onClick={() => {onButtonClick('Forward')}}>
            <BsFillSkipForwardFill />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Remote;
