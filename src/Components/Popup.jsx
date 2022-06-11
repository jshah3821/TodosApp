import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Modal, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Popup = () => {
  const [show, setShow] = useState(true);
  const [task, setTask] = useState("");
  let Navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
    Navigate("/");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://629b97b4656cea05fc3b6229.mockapi.io/Todos", {
      todo: task
    });
    setShow(false);
    Navigate("/");
  };

  return (
    <div>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Enter Task Here</Form.Label>
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
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Popup;
