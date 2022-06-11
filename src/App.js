import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menubar from "./Components/Menubar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Popup from "./Components/Popup";
import Update from "./Pages/Update";
import Footers from "./Components/Footers";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Menubar />
        <div className="my-3">
          <h1 style={{ textAlign: "center", color: "white" }}>Todos App</h1>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route exact path="/addtodo" element={<Popup />}></Route>
          <Route exact path="/update" element={<Update />}></Route>
        </Routes>
        <Footers />
      </div>
    </Router>
  );
}
