import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button, Modal, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [show, setShow] = useState(true);
  const [task, setTask] = useState("");
  const [id, setid] = useState(null);
  let Navigate = useNavigate();
  useEffect(() => {
    setid(localStorage.getItem("id"));
    setTask(localStorage.getItem("todo"));
  }, []);

  const handleClose = () => {
    setShow(false);
    Navigate("/");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://629b97b4656cea05fc3b6229.mockapi.io/Todos/${id}`, {
      todo: task
    });
    setShow(false);
    Navigate("/");
  };

  return (
    <div>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Update Task Here</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Task Here"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="dark"
            onClick={handleSubmit}
            disabled={task === "" ? true : false}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Update;
