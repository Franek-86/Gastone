import React, { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUserName, setPassword } = useGlobalContext();

  const { register, handleSubmit } = useForm();
  const onSubmit = (d) => {
    const { firstName, password } = d;
    setUserName(firstName);
    setPassword(password);
    localStorage.setItem("user", firstName);
    navigate("/dashboard");
  };

  return (
    <Container fluid>
      <Row
        style={{ height: "100vh", backgroundColor: "#85bd4b" }}
        className='d-flex align-items-center'
      >
        <Col xs={{ span: 8, offset: 2 }}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FloatingLabel
              controlId='floatingInput'
              label='Email address'
              className='mb-3'
            >
              <Form.Control
                type='email'
                placeholder='name@example.com'
                {...register("firstName")}
              />
            </FloatingLabel>
            <FloatingLabel controlId='floatingPassword' label='Password'>
              <Form.Control
                type='password'
                placeholder='Password'
                {...register("password")}
              />
            </FloatingLabel>
            <Button
              type='submit'
              className='d-block mx-auto mt-3'
              variant='secondary'
              //style={{ textColor: "white" }}
            >
              Entra
            </Button>{" "}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
