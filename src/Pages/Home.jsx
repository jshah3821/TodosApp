import axios from "axios";
import React, { useEffect, useState } from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [getdata, setGetData] = useState([]);
  const [Id, setId] = useState(null);

  useEffect(() => {
    axios
      .get("https://629b97b4656cea05fc3b6229.mockapi.io/Todos")
      .then((response) => setGetData(response.data));
  });

  const handleUpdate = (data) => {
    localStorage.setItem("id", data.id);
    localStorage.setItem("todo", data.todo);
  };

  const handleCheck = (id) => {
    setId(id);
  };
  const handleDelete = () => {
    axios.delete(`https://629b97b4656cea05fc3b6229.mockapi.io/Todos/${Id}`);
  };

  return (
    <div className="m-4">
      <ListGroup>
        <ListGroup.Item
          variant="dark"
          action
          as={Link}
          to="/addtodo"
          style={{ textAlign: "center" }}
        >
          Add Task
        </ListGroup.Item>
        {getdata.length === 0 ? (
          <ListGroup.Item style={{ textAlign: "center" }}>
            No Tasks to Display
          </ListGroup.Item>
        ) : (
          getdata.map((data) => {
            return (
              <ListGroup.Item key={data.id}>
                <Row>
                  <Col>
                    <input
                      className="mx-4"
                      type="checkbox"
                      id="checkbox"
                      name="checkbox"
                      onChange={() => handleCheck(data.id)}
                    />
                  </Col>
                  {data.todo}
                  <Col>
                    <span style={{ float: "right" }}>
                      <Link to="/update">
                        <i
                          className="fas fa-edit mx-2"
                          aria-hidden="true"
                          onClick={() => handleUpdate(data)}
                        ></i>
                      </Link>
                    </span>
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })
        )}
        <ListGroup.Item
          className="textCenter"
          variant="dark"
          action
          style={{ textAlign: "center" }}
          onClick={(e) => handleDelete()}
          disabled={Id === null ? true : false}
        >
          Delete Task<i className="fa fa-trash mx-2" aria-hidden="true"></i>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};
export default Home;
