import React, { useState } from "react"
import {Form, FormControl, FormCheck, InputGroup, Button, Col } from 'react-bootstrap'


function SignupForm() {
    const [validated, setValidated] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [secQ1, setSecQ1] = useState("");
    const [secQ2, setSecQ2] = useState("");
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        
      }
      console.log(firstName, lastName,email,username,password,secQ1,secQ2);
      setValidated(true);
    };
  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              value = {firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="lastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              value = {lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="Email">
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <Form.Control
                type="Email"
                placeholder="Email"
                value = {email}
                onChange = {e => setEmail(e.target.value)}
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please Enter your Email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="10" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="username"
              placeholder="Enter username here"
              value = {username}
              onChange={e => setUsername(e.target.value)}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row></Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="10" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Enter password here"
              value = {password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="10" controlId="secQ1">
            <Form.Label>What is the make or model of your first car?</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Security Question 1 answer here"
               value = {secQ1}
              onChange={e => setSecQ1(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
        <Form.Group as={Col} md="10" controlId="secQ2">
            <Form.Label>In what City you were born?</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Security Question 2 answer here"
              value = {secQ2}
              onChange={e => setSecQ2(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Button type="submit">Submit form</Button>
      </Form>
    );
  }
  
  export default SignupForm;