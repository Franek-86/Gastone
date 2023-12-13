import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SingleItem = ({ item, index, handleOnChange, checked1 }) => {
  const navigate = useNavigate();
  const { text, icon, text1, text2 } = item;

  const something = (index) => {
    if (index === 0) {
      console.log("apri portone esterno");
    }
    if (index === 1) {
      console.log("apri portone interno");
    }
    if (index === 2) {
      const open = "apri porta d'ingresso";
      // navigate("/door");
      navigate("/door", { state: { state: open } });
    }
  };
  const somethingElse = (index, test) => {
    navigate("/door", { state: { state: test } });
  };

  return (
    <Col
      xs={8}
      style={{
        maxWidth: "350px",
        minWidth: "300px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Card className='shadow bg-body-tertiary'>
        <Row xs={1} md={1} className='g-3 '>
          <Col xs={4} md={4}>
            <div className='card__icon'>
              <div className='card__icon__container'>{icon}</div>
            </div>
          </Col>
          <Col xs={8} md={8}>
            <Card.Body>
              {text1 ? (
                <Card.Title>
                  <div className='test-3'>
                    <h6 className='card__text_door'>porta d'ingresso</h6>
                  </div>
                </Card.Title>
              ) : null}
              <Card.Title>
                <div className='test-3'>
                  {!text2 ? (
                    <h6 className='card__text'>{text}</h6>
                  ) : (
                    <span className='text-span'>{text1}</span>
                  )}
                  {text2 && <span className='text-span'>{text2}</span>}
                </div>
              </Card.Title>
              <Form className='test'>
                {
                  index >= 0 && index < 2 ? (
                    <div
                      className='btn-container'
                      onClick={() => {
                        something(index);
                      }}
                    ></div>
                  ) : index === 2 ? (
                    <div className='test-2'>
                      <div className='test-1'>
                        <div
                          className='btn-container-entrance open'
                          onClick={() => {
                            const open = "apri porta d'ingresso";
                            somethingElse(index, open);
                          }}
                        ></div>
                        <div
                          className='btn-container-entrance close'
                          onClick={() => {
                            const close = "chuidi porta d'ingresso";
                            somethingElse(index, close);
                          }}
                        ></div>
                      </div>
                    </div>
                  ) : (
                    <Form.Check // prettier-ignore
                      type='switch'
                      id='custom-switch'
                      name={text}
                      // label='Check this switch'
                      onChange={() => {
                        handleOnChange(text);
                      }}
                      checked={checked1(text)}
                    />
                  )

                  // test2()
                }
              </Form>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default SingleItem;
// const SingleItem = ({ item }) => {
//   const [checkedState, setCheckedState] = useState(
//     new Array(allItems.length).fill(false)
//   );
//   const { id, text, icon } = item;
//   return (
//     <Col>
//       <Card className='shadow'>
//         <Row xs={1} md={1} className='g-3'>
//           <Col xs={4} md={4}>
//             {/* <Card.Body> */}
//             {/* <Card.Text>Card Icon</Card.Text> */}
//             <div className='card__icon'>
//               <div className='card__icon__container'>{icon}</div>
//             </div>
//             {/* </Card.Body> */}
//           </Col>
//           <Col xs={8} md={8}>
//             <Card.Body>
//               <Card.Title>
//                 <h5 className='card__text'>{text}</h5>
//               </Card.Title>
//               <Form>
//                 <BootstrapSwitchButton checked={checkedState} width={100} />
//                 {/* <BootstrapSwitchButton
//                   checked={false}
//                   onlabel='Admin User'
//                   offlabel='Regular User'
//                   onChange={(checked: boolean) => {
//                     this.setState({ isUserAdmin: checked });
//                   }}
//                 /> */}

//                 {/* <Form.Check // prettier-ignore
//                   type='switch'
//                   id='custom-switch'

//                   // label='<i class='fa fa-unlock'></i>'
//                 /> */}
//               </Form>
//             </Card.Body>
//           </Col>
//         </Row>
//       </Card>
//     </Col>
//   );
// };
