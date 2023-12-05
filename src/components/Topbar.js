import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo_developing.png";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/userContext";

const TopBar = ({ doorPage }) => {
  const { userName } = useGlobalContext();
  const clearUserStorage = () => {
    localStorage.removeItem("user");
  };
  return (
    <Navbar className='bg-body-tertiary mb-4'>
      <Container>
        <Navbar.Brand href='#home'>
          <img alt='' src={logo} className='d-inline-block align-top' />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          {doorPage ? (
            <Link to='/dashboard' className='btn btn-primary btn-sm'>
              Back
            </Link>
          ) : (
            <Navbar.Text>
              <a onClick={clearUserStorage} href='/'>
                {userName ? "logout" : "login"}
              </a>
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
<Navbar className='bg-body-tertiary'>
  <Container>
    <Navbar.Brand href='#home'>Navbar with text</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className='justify-content-end'>
      <Navbar.Text>
        Signed in as: <a href='#login'>Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>;
