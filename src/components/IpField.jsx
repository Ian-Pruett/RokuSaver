import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { Context } from "./stores/Store";


function IpField() {

  const [state, dispatch] = React.useContext(Context);

  const setAddr = (e) => {
    dispatch({
      type: 'SET_ADDR',
      payload: e
    });
  };

  return (
    <Container>
      <Row className='pt-2'>
        <Col sm={{ span: 8, offset: 2 }} md={{ span: 4, offset: 4 }}>
          <InputGroup>
            <InputGroup.Text value="hi">Roku IP Address</InputGroup.Text>
            <FormControl onChange={(e) => { setAddr(e.target.value) }} />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default IpField;