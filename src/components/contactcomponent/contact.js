import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/Button';





class Contact extends Component {

  render() {
    return (
      <div className="container">
        <Form>
         <Form.Group controlId="exampleForm.ControlInput1">
         <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Example select</Form.Label>
        <Form.Control as="select">
          <option>Engineering</option>
          <option>Medical</option>
          <option>Business</option>
          <option>Consulting</option>
          <option>None</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <ButtonToolbar>
<Button variant="primary">Submit</Button>
  </ButtonToolbar>

        </Form>
      </div>
    );
  }
  }


export default Contact;
