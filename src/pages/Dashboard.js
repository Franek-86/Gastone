import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { BsBuildingLock } from "react-icons/bs";
import SingleItem from "../components/SingleItem";
import { allItems } from "../utils/data";
import { useState } from "react";
import TopBar from "../components/Topbar";
import Footer from "../components/Footer";

function DashBoard() {
  const [test, setTest] = useState([
    { name: "ricarica serratura", checked: false },
    { name: "generale", checked: false },
    { name: "pompa", checked: false },
    { name: "fancoil", checked: false },
    { name: "condizionatore", checked: false },
    { name: "caldaia", checked: false },
  ]);

  const handleOnChange = (test1) => {
    let newState = test.map((item) => {
      if (item.name === test1) {
        item.checked = !item.checked;
      }
      return item;
    });
    setTest(newState);
  };

  let checked1 = (test2) => {
    let test7 = test.find((item) => {
      if (item.name === test2) {
        return item;
      }
    });
    let test8 = test7.checked;

    return test8;
  };

  return (
    <>
      <TopBar />
      <Container>
        <Row xs={1} className='g-4'>
          {allItems.map((item, index) => (
            <SingleItem
              key={index}
              index={index}
              item={item}
              test={test}
              checked1={checked1}
              setTest={setTest}
              handleOnChange={handleOnChange}
            />
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default DashBoard;
