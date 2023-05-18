import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import { NavLink } from "react-router-dom";


function MyCard(props) {

  const [hover, setHover] = useState(false);
 
  return (
    <NavLink to={props.NavLink} >
      <Card
      >
        <div
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          <a href="">
            {" "}
            <Card.Img variant="top" src={hover ? props.hoversrc : props.src} />
          </a>
        </div>

        <Card.Body>
          <Card.Title className="product-title">{props.title}</Card.Title>
          <Card.Text className="product-size">
            <h5>S</h5>
            <h5>M</h5>
            <h5>L</h5>
            <h5>XL</h5>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{"₹"+ props.price +".00"}</ListGroup.Item>
        </ListGroup>
      </Card>
    </NavLink>
  );
}

export default MyCard;
