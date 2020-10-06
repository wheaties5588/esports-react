import React, { useState } from "react"
import {Form, FormControl, FormCheck, InputGroup, Button, Col } from 'react-bootstrap'



function ForgotPasswordForm() {
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
          <Form.Group as={Col} md="10" controlId="validationCustom01">
            <Form.Label>Security Question 1</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Security Question 1"
              defaultValue="What is the make or model of your first car?"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col} md="10" controlId="validationCustom02">
            <Form.Label>Security Question 2</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Security Question 2"
              defaultValue="In what City you were born?"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
 

        <Button type="submit">Submit Answers</Button>
      </Form>
    );
  }
  

  export default ForgotPasswordForm;