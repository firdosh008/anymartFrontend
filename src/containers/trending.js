import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyCard from "../components/cards";


function Trending(t) {
  return (
    <div className="trending">
      <h1>TRENDING</h1>
      <div className="productrow">
        <Row>
          {t.t.map((item) => {
            if (item.id[0] == "t") {
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

export default Trending;
