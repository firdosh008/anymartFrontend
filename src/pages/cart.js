import React from "react";
import { Row, Col } from "react-bootstrap";
import Cartproduct from "../components/cartproduct";
import { BarWave } from "react-cssfx-loading";
import Footer from "../containers/footer";
import NavScroll from "../containers/navbar";
import { useNavigate } from "react-router-dom";
import empty from "../assets/empty-card.avif";

function Cart() {
  const navigate = useNavigate();
  const senddata = ()=>{
     navigate("/");
  }


  const [cartdata, setcartdata] = React.useState({});
  //console.log(cartdata);

  const getdata = async () => {
    const res = await fetch("/cartdetails", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    //console.log(data);
    if (res.status === 201) {
      //console.log("data get successfully");
      setcartdata(data.data.carts);
    } else {
      console.log("data not get");
    }
  };

  React.useEffect(() => {
    getdata();
  }, []);


  let m=0;
  let cost=0;


  return (
    <>
      {cartdata.length ? (
        <>
          <NavScroll />
          <div className="cart cartbody">
            <Row>
              <Col lg={8} md={12} sm={12}>
                <Row>
                  <Col  sm={6} xs={9}>
                    <h3>Product</h3>
                  </Col>
                  <Col  sm={2} xs={3}>
                    <h3>Price</h3>
                  </Col>
                  <Col  sm={2} xs={0} >
                    <h3 className="hide">Discount</h3>
                  </Col>
                  <Col  sm={2}  xs={0}>
                    <h3 className="hide">Subtotal</h3>
                  </Col>
                </Row>
                <hr></hr>
                {cartdata.map((item) => {
                  if(item.price!=null){
                  m=m+parseInt(item.price.mrp);
                  cost=cost+parseInt(item.price.cost);
                }
                  return (
                    <Cartproduct
                      image={item.mainurl}
                      name={item.title}
                      price={item.price}
                      iddata={item}
                    ></Cartproduct>
                  );
                  
                })}

                <hr></hr>
                <form>
                  <input
                    className="coupon"
                    type="text"
                    placeholder="Enter Coupon Code"
                  ></input>
                  <button className="cApply">Apply Coupon</button>
                </form>
              </Col>
              <Col lg={4} md={12} sm={12}>
                <Row>
                  <Col className="cartTotal">
                    <h3>Cart Totals</h3>

                    <h4>Subtotal: </h4>
                    <p className="value">{"₹" + m + ".00"}</p>
                    <hr className="hr"></hr>
                    <h4>Shipping: </h4>
                    <p className="value shipping">
                      Shipping costs are calculated during checkout
                    </p>
                    <hr className="hr"></hr>
                    <h4>Discount</h4>
                    <p className="value">{"-₹" + (m-cost) + ".00"}</p>
                    <hr className="hr"></hr>
                    <h4>Total: </h4>
                    <p className="value">{"₹" + cost + ".00"}</p>
                  </Col>
                </Row>
                <Row className="rowc">
                  <button className="checkout">Proceed to Checkout</button>
                </Row>
              </Col>
            </Row>
          </div>
          <Footer />
        </>
      ) : (
        <div className="empty-cart">  
        <img src={empty} />
        <button className='sig-btn' onClick={senddata}>Add to cart</button>
        </div>
      )
      
      }
    </>
  );
}

export default Cart;
