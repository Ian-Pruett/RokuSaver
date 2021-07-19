import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';


function KeyboardInput() {

  const sendCommand = (val) => {
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
            <FormControl onKeyDown={(e) => processKeyDown(e.key)}></FormControl>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default KeyboardInput;