import React, { useState } from "react"
import {Form, FormControl, FormCheck, InputGroup, Button, Col } from 'react-bootstrap'


function SignupForm() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="John"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Doe"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomEmail">
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <Form.Control
                type="Email"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please Enter your Email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
 

        <Button type="submit">Submit form</Button>
      </Form>
    );
  }
  
  export default SignupForm;