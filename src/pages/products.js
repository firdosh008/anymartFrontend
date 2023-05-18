import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import shipping from "../assets/trust_badge_free_shipping.webp";
import india from "../assets/trust_badge_india.webp";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Dropd from "../components/dropdown";
import { useEffect, useState } from "react";
import Reviews from "../components/review";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "../components/contexProvider";
import { useContext } from "react";
import { BarWave, Hypnosis } from "react-cssfx-loading";
import Footer from "../containers/footer";
import NavScroll from "../containers/navbar";

function Products() {
  const { id } = useParams();
  //console.log(id);

  const history = useNavigate("");

  const { account, setAccount } = useContext(LoginContext);

  const [iddata, setData] = useState([]);
  const [currentImage, setCurrentImage] = useState();
  //console.log(iddata);

  const getiddata = async () => {
    const res = await fetch("/getproductone/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    //console.log(data);

    if (data.status === 400 || !data) {
      return <div>Loading...</div>;
    } else {
      setData(data);
      setCurrentImage(data.mainurl);
    }
  };

  useEffect(() => {
    getiddata();
  }, [id]);

  const images = iddata.otherurl;

  const handleClick = (image) => {
    setCurrentImage(image);
  };

  const handleLeftClick = () => {
    const currentIndex = images.indexOf(currentImage);
    const lastIndex = images.length - 1;
    const newIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
    setCurrentImage(images[newIndex]);
  };

  const handleRightClick = () => {
    const currentIndex = images.indexOf(currentImage);
    const lastIndex = images.length - 1;
    const newIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
    setCurrentImage(images[newIndex]);
  };

  const addtocart = async (id, b) => {
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
    console.log(data);

    if (res.status === 401 || !data) {
      toast.error(data.error, {
        position: "top-center",
        autoClose: 2000,
      });
      //window.alert("Invalid");
    } else {
      toast.success(data.message, {
        position: "top-center",
        autoClose: 2000,
      });
      //window.alert("Added to cart");

      {
        b === "buy" ? history("/cart") : console.log(b);
      }

      setAccount(data);
    }
  };

  return (
    <>
      {iddata && Object.keys(iddata).length ? (
        <>
          <NavScroll />
          <div className="new_Products">
            <div>
              <Row style={{width:"100%"}}> 
                <Col lg={1} sm={0} className="product-col2">
                  {iddata.otherurl.map((image) => {
                    return (
                      <div className="side-Image">
                        <Row>
                          <img
                            key={image}
                            src={image}
                            alt="product-image"
                            className={`image ${
                              currentImage === image ? "active" : ""
                            }`}
                            onClick={() => handleClick(image)}
                          />
                        </Row>
                      </div>
                    );
                  })}
                </Col>

                <Col lg={5} sm={12}>
                  <div className="product-col1">
                    <button
                      className="carousel-button left"
                      onClick={handleLeftClick}
                    >
                      <AiOutlineArrowLeft className="arrow" />
                    </button>
                    <div className="image-preview">
                      <img src={currentImage} alt="Image Preview" />
                    </div>
                    <button
                      className="carousel-button right"
                      onClick={handleRightClick}
                    >
                      <AiOutlineArrowRight className="arrow" />
                    </button>
                  </div>
                </Col>
                <Col lg={6} sm={12}>
                  <div className="product-detail">
                    <h2>{iddata.title}</h2>
                    <div className="prices">
                      <h4 className="cost">
                        {"₹" + iddata.price.cost + ".00"}
                      </h4>
                      <h4 className="mrp">{"₹" + iddata.price.mrp + ".00"}</h4>
                      <h4 className="discount">{iddata.price.discount}</h4>
                    </div>

                    <img className="badges" src={shipping}></img>
                    <img className="badges" src={india}></img>

                    {account ? (
                      <div className="btn-group">
                        <button
                          className="btns"
                          onClick={() => addtocart(iddata.id)}
                        >
                          Add to cart{" "}
                        </button>
                        <button
                          className="btns"
                          onClick={() => addtocart(iddata.id, "buy")}
                        >
                          By Now{" "}
                        </button>
                      </div>
                    ) : (
                      <div className="btn-group">
                        <button
                          className="btns"
                          onClick={() => history("/login")}
                        >
                          Add to cart{" "}
                        </button>
                        <button
                          className="btns"
                          onClick={() => history("/login")}
                        >
                          By Now{" "}
                        </button>
                      </div>
                    )}

                    <hr></hr>
                    <div>
                      <div className="icons">
                        <a href="">
                          <BsFacebook />
                        </a>
                      </div>
                      <div className="icons">
                        <a href="">
                          <AiFillTwitterCircle />
                        </a>
                      </div>
                      <div className="icons">
                        <a href="">
                          <BsPinterest />
                        </a>
                      </div>
                      <div className="icons">
                        <a href="">
                          <FaWhatsapp />
                        </a>
                      </div>
                      <div className="icons">
                        <a href="">
                          <FaLinkedin />
                        </a>
                      </div>
                      <div className="icons">
                        <a href="">
                          <FaInstagram />
                        </a>
                      </div>
                      <div className="icons">
                        <a href="">
                          <MdEmail />
                        </a>
                      </div>
                    </div>
                    <div style={{ position: "relative" }}>
                      <Dropd top="30" heading="Product Description" />
                      <Dropd top="90" heading="Shipping & Return Info" />
                      <Dropd top="150" heading="Offers" />
                    </div>
                  </div>
                </Col>
              </Row>
              <Reviews />
              <ToastContainer />
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <BarWave
          className="loader"
          color="black"
          width="50px"
          height="50px"
          duration="3s"
        />
      )}
    </>
  );
}

export default Products;
