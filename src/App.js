import logo from "./logo.svg";
import "./App.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Users from "./Component/Users";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Item>
                <Link to="/">Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/about">About</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/Users">Users</Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route Component={Home} path="/"></Route>
          <Route Component={About} path="/about"></Route>
          <Route Component={Users} path="/users"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
