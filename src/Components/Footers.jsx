import { Card } from "react-bootstrap";

function Footers() {
  return (
    <Card className="my-5">
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{" "}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
          <p style={{ textAlign: "center" }}>© Thinktanker 2022</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Footers;
