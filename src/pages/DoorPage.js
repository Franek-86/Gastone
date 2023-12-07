import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TopBar from "../components/Topbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsUnlock } from "react-icons/bs";
import { BsUnlockFill } from "react-icons/bs";
import { BsFillUnlockFill } from "react-icons/bs";
import { BsFillLockFill } from "react-icons/bs";

// <BsFillUnlockFill />;

const DoorPage = ({ test }) => {
  const something = (prop) => {
    if (prop === true) {
      console.log("apri la porta");
    }
    if (prop === false) {
      console.log("chiudi la porta");
    }
  };

  const location = useLocation();
  const text = location.state.state;
  let flag;
  if (text === "chuidi porta d'ingresso") {
    flag = false;
  }
  if (text === "apri porta d'ingresso") {
    flag = true;
  }
  return (
    <div>
      <TopBar doorPage />
      <div className='door__section'>
        <h6 className='text-center mb-3'>{text}</h6>

        <Container>
          <Row>
            <Col>
              <Card
                className='shadow bg-body-tertiary'
                style={{ height: "75vh" }}
              >
                <div className='locker__container'>
                  <div
                    className={
                      !flag
                        ? "locker__container__icon__container test1"
                        : "locker__container__icon__container"
                    }
                    style={{
                      borderColor: !flag ? "#ffa3af" : "#85bd4b",
                    }}
                    onClick={() => something(flag)}
                  >
                    {/* <BsFillLockFill className='' /> */}
                    <div className='locker__container__icon'>
                      {!flag ? (
                        <BsFillLockFill />
                      ) : (
                        <BsFillUnlockFill
                          style={{ transform: "translateX(12%)" }}
                        />
                      )}
                    </div>
                    <span>{!flag ? "chiudi" : "apri"}</span>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DoorPage;
