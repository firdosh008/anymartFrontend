import React from "react";
import { Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Cartproduct(props) {
  const dis = props.price.mrp - props.price.cost;
  const iddata = props.iddata;

  const addtocart = async (id) => {
    const res = await fetch("/addtocart/" + id, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        iddata,
      }),
      credentials: "include",
    });
    const data = await res.json();

    if (res.status === 401 || !data) {
      toast.error(data.error, {
        position: "top-center",
      });
      //window.alert("Invalid");
    } else {
      toast.success(data.message, {
        position: "top-center",
      });
      window.location.reload();
    }
  };

  const remove = async (id) => {
    const res = await fetch("/remove/" + id, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        iddata,
      }),
      credentials: "include",
    });
    const data = await res.json();

    if (res.status === 401 || !data) {
      toast.error(data.error, {
        position: "top-center",
      });
      //window.alert("Invalid");
    } else {
      toast.success(data.message, {
        position: "top-center",
      });
      window.location.reload();
    }
  };

  return (
    <div>
      <Row className="cartProduct">
        <Col lg={6} xs={9}>
          <img className="img" src={props.image}></img>
          <div className="btn-title">
            <h3 className="title">{props.name}</h3>
            <div className="btns">
              <button className="btn remove" onClick={() => remove(iddata.id)}>
                Remove
              </button>
              <button className="btn add" onClick={() => addtocart(iddata.id)}>
                ADD
              </button>
            </div>
          </div>
        </Col>
        <Col lg={2} xs={3}>
          <h3 className="detail1">{"₹" + props.price.mrp + ".00"}</h3>
        </Col>
        <Col lg={2} xs={0}>
          <h3 className="subtotal hide">{"-₹" + dis + ".00"} </h3>
        </Col>
        <Col lg={2} xs={0}>
          <h3 className="subtotal hide">{"₹" + props.price.cost + ".00"} </h3>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
}

export default Cartproduct;
