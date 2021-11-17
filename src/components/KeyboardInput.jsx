import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { Context } from './stores/Store';
import { sendCommand } from "../modules/RokuPress";


function KeyboardInput() {

  const [state, dispatch] = React.useContext(Context);

  const processKeyDown = (key) => {
    let addr = state.addr;
    let press = key;
    if (key.length === 1) {
      press = `LIT_${escape(press)}`;
      sendCommand(state.addr, press);
    }
    if (press === 'Backspace') {
      sendCommand(addr, press);
    }
  };

  return (
    <Container>
      <Row className='pt-2'>
        <Col sm={{ span: 8, offset: 2 }} md={{ span: 4, offset: 4 }}>
          <InputGroup>
            <InputGroup.Text>Keyboard</InputGroup.Text>
            <FormControl onKeyDown={(e) => processKeyDown(e.key)}></FormControl>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default KeyboardInput;