import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

const Box = styled.div`
  padding: 5px;
  border: 5px solid blue;
`;

function DisplayName(props) {
  return (
    <h1 className="color-red">
      Hi, my name is {props.firstName} {props.lastName}
    </h1>
  );
}

function Homepage() {
  return (
    <div>
      <h1>homepage</h1>
      <Link to="/about">about page</Link>
    </div>
  );
}

function Aboutpage() {
  return (
    <div>
      <h1>about</h1>
      <Link to="/">home page</Link>
    </div>
  );
}

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<Aboutpage />} />
      </Routes>
      <div
        className="header"
        style={{ border: "1px solid cyan", backgroundColor: "yellow" }}
      >
        <DisplayName firstName="jaka" lastName="tarub" />
        <DisplayName firstName="ridho" lastName="azhar" />
      </div>
    </Box>
  );
}

export default App;
