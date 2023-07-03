import React from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import { useState } from 'react';
export default function Signup(props) {
    const [newUser, setNewUser] = useState({})
const changeHandler = (e) => {
    const user = {...newUser}
    user[e.target.name] = e.target.value
    console.log(user)
    setNewUser(user)
}
const registerHandler = (e) => {
    props.register  (newUser)
}
  return (
    <>
    <h1 className="sign-logo">Signup</h1>
    <Container>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" onChange={changeHandler}></Form.Control>
      </Form.Group>
      
        
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" onChange={changeHandler}></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" onChange={changeHandler}></Form.Control>
      </Form.Group>
      <Button onClick={registerHandler}
      variant="primary">
        Register
      </Button>
    </Container>
  </>
  )
}