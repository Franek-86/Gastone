import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const DoorPage = () => {
  const [isLocked, setDoorIsLocked] = useState(true);
  return (
    <div>
      <TopBar doorPage />
      <div className='door__section'>
        <h6 className='text-center mb-3'>porta d'ingresso</h6>

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
                      isLocked
                        ? "locker__container__icon__container"
                        : "locker__container__unlocked "
                    }
                    style={{
                      borderColor: isLocked ? "#ffa3af" : "#85bd4b",
                    }}
                    onClick={() => setDoorIsLocked(false)}
                  >
                    {/* <BsFillLockFill className='' /> */}
                    <div className='locker__container__icon'>
                      {isLocked ? (
                        <BsFillLockFill />
                      ) : (
                        <BsFillUnlockFill
                          style={{ transform: "translateX(12%)" }}
                        />
                      )}
                    </div>
                    <span>{isLocked ? "chiusa" : "aperta"}</span>
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
