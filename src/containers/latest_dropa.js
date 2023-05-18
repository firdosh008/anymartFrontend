import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyCard from "../components/cards";

//import latest_drop_data from '../data/latest_drop_data';

function latest_dropa(ld) {

  return (
    <div className="latest_drop">
      <h1>TODAYS DROPS</h1>
      <p>Each Drop Comes With a Daily Price Offer</p>
      <div className="productrow">
        
        <Row>
          {ld.ld.map((item) => {
            if (item.id[0] === "l" && item.id[1] === "d") {
              return (
                
                <Col lg={2} md={4} xs={6}>
                  <MyCard
                    src={item.mainurl}
                    hoversrc={item.otherurl[1]}
                    price={item.price.mrp}
                    nprice={item.price.cost}
                    title={item.title}
                    NavLink={"/getproductone/"+item.id}
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

export default latest_dropa;
