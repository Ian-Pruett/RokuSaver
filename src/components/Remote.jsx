import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Context } from './stores/Store';
import { sendCommand } from '../modules/RokuPress';
import {
  BsArrowLeftShort, BsFillHouseFill, BsArrowUp, BsArrowLeft,
  BsArrowRight, BsArrowDown, BsArrowCounterclockwise, BsGear,
  BsFillPlayFill, BsFillSkipBackwardFill, BsFillSkipForwardFill
} from 'react-icons/bs'


function Remote() {

  const [state, dispatch] = React.useContext(Context);

  const onButtonClick = (val) => {
    let addr = state.addr;
    sendCommand(addr, val);
  }

  return (
    <Container>
      <Row className="pt-1">
        <Col className="text-center">
          <Button size="lg" onClick={() => { onButtonClick('Back') }}>
            <BsArrowLeftShort />
          </Button>{' '}
          <Button size="lg" onClick={() => { onButtonClick('Home') }}>
            <BsFillHouseFill />
          </Button>
        </Col>
      </Row>
      <Row className="pt-1">
        <Col className="text-center">
          <Button size="lg" onClick={() => { onButtonClick('Up') }}>
            <BsArrowUp />
          </Button>
        </Col>
      </Row>
      <Row className="pt-1">
        <Col className="text-center">
          <Button size="lg" onClick={() => { onButtonClick('Left') }}>
            <BsArrowLeft />
          </Button>{' '}
          <Button size="lg" onClick={() => { onButtonClick('Select') }}>
            OK
          </Button>{' '}
          <Button size="lg" onClick={() => { onButtonClick('Right') }}>
            <BsArrowRight />
          </Button>{' '}
        </Col>
      </Row>
      <Row className="pt-1">
        <Col className="text-center">
          <Button size="lg" onClick={() => { onButtonClick('Down') }}>
            <BsArrowDown />
          </Button>
        </Col>
      </Row>
      <Row className="pt-1">
        <Col className="text-center">
          <Button size="lg" onClick={() => { onButtonClick('InstantReplay') }}>
            <BsArrowCounterclockwise />
          </Button>{' '}
          <Button size="lg" onClick={() => { onButtonClick('Info') }}>
            <BsGear />
          </Button>
        </Col>
      </Row>
      <Row className="pt-1">
        <Col className="text-center">
          <Button size="lg" onClick={() => { onButtonClick('Rev') }}>
            <BsFillSkipBackwardFill />
          </Button>{' '}
          <Button size="lg" onClick={() => { onButtonClick('Play') }}>
            <BsFillPlayFill />
          </Button>{' '}
          <Button size="lg" onClick={() => { onButtonClick('Forward') }}>
            <BsFillSkipForwardFill />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Remote;
