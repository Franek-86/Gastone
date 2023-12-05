import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { BsBuildingLock } from "react-icons/bs";
import SingleItem from "../components/SingleItem";
import { allItems } from "../utils/data";
import { useState } from "react";
import TopBar from "../components/Topbar";
import Footer from "../components/Footer";
import { useGlobalAppContext } from "../context/appContext";

function DashBoard() {
  // const {
  //   isLoading,
  //   gate1,
  //   gate2,
  //   door,
  //   lockerCharger,
  //   general,
  //   unknown1,
  //   unknown2,
  // } = useGlobalAppContext();
  const test = useGlobalAppContext();
  // console.log(Object.keys(test).length - 1);
  let objLength = Object.keys(test).length - 1;

  const [checkedState, setCheckedState] = useState(
    new Array(objLength).fill(false)
  );
  const navigate = useNavigate();
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) => {
      if (position === 2) {
        console.log("this one");
        navigate("/door");

        return item;
      }

      if (position === 0 || position === 1) {
        return index === position ? true : item;
      }
      return index === position ? !item : item;
    });

    setCheckedState(updatedCheckedState);
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
              checkedState={checkedState}
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
