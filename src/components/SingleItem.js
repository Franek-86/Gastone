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
  const { text, icon } = item;

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
    if (index === 3) {
      const close = "chuidi porta d'ingresso";
      // navigate("/door");
      navigate("/door", { state: { state: close } });
    }
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
              <Card.Title>
                <h6 className='card__text'>{text}</h6>
              </Card.Title>
              <Form className='test'>
                {
                  index >= 0 && index <= 3 ? (
                    <div
                      className='btn-container'
                      onClick={() => {
                        something(index);
                      }}
                    ></div>
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
