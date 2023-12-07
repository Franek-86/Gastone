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
  const checked1 = () => {
    let test6 = test.map((item) => {
      // console.log(item.checked);
      let test = item.checked;
      console.log(test);
      return test;
    });
    console.log(test6);
    return test6;
  };
  checked1();

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
              setTest={setTest}
              handleOnChange={handleOnChange}
              checked1={checked1}
            />
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default DashBoard;
