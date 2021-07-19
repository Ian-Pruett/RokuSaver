import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { Context } from './stores/Store';


function KeyboardInput() {

  const [state, dispatch] = React.useContext(Context);

  const sendCommand = (val) => {
    const url = '/api/keypress';
    if (state.addr === "") {
      alert("Please set IP Address");
      return;
    }
    const requestOptions = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        addr: state.addr,
        key: val 
      })
    };
    fetch(url, requestOptions)
  }

  const processKeyDown = (key) => {
    let press = key;
    if (key.length === 1) {
      press = `LIT_${escape(press)}`;
      sendCommand(press);
    }
    if (press === 'Backspace') {
      sendCommand(press);
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