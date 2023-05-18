import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyCard from "../components/cards";

function NewArivals(na) {
  return (
    <div className="trending">
      <h1>NEW ARRIVALS</h1>
      <div className="productrow">
        <Row>
          {na.na.map((item) => {
            if (item.id[0] == "n" && item.id[1] == "a") {
              return (
                <Col lg={2} md={4} xs={6}>
                  <MyCard
                    src={item.mainurl}
                    hoversrc={item.otherurl[1]}
                    price={item.price.mrp}
                    nprice={item.price.cost}
                    title={item.title}
                    NavLink={"/getproductone/" + item.id}
                  />
                </Col>
              );
            }
          })}
        </Row>
      </div>
    </div>
  );
}

export default NewArivals;
