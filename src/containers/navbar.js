import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsCartFill} from "react-icons/bs";
import{IoPersonCircleSharp} from "react-icons/io5";
import { Link } from "react-router-dom";
import { LoginContext } from "../components/contexProvider";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import { FcSearch } from "react-icons/fc";

function NavScroll(props) {
  const { account, setAccount } = useContext(LoginContext);
  //console.log(account.data);

  const [text, setText] = React.useState("");
  //console.log(text);
  const [liopen, setLiopen] = React.useState(true);

  const { products } = useSelector((state) => state.getProductsdata);

  const [profile, setProfile] = React.useState(false);

  const getdetailvaliduser = async () => {
    const res = await fetch("/validuser", {
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
      setAccount(data);
    } else {
      console.log("data not get");
    }
  };

  const logout = async () => {
    const res = await fetch("/logout", {
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
      setAccount({ data: null });
      window.location.reload();
    } else {
      console.log("data not get");
    }
  };

  const getText = (text) => {
    setText(text);
    setLiopen(false);
  };

  React.useEffect(() => {
    getdetailvaliduser();
  }, []);

  const profileopen = () => {
    setProfile(!profile);
  };

  return (
    <>
      <Navbar
        className="Navbar"
        expand="lg"
      >
        <Nav
          className="me-auto my-2 my-lg-0 Nav"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          {/*first dropdown*/}

          <NavDropdown
            title="TOP CATEGORIES"
            id="navbarScrollingDropdown"
            className="navbarScrollingDropdown "
          >
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>

          {/*Second dropdown*/}

          <NavDropdown
            title="SHOP BY PRODUCT"
            id="navbarScrollingDropdown"
            className="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>

          {/*Third dropdown*/}

          <NavDropdown
            title="SHOP BY ANIME"
            id="navbarScrollingDropdown"
            className="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>

          {/*Brand*/}
          
        </Nav>
        <Nav>
        <Navbar.Brand className="Navbrand" style={{ color: "white" }}>
            {" "}
            <Link to="/" className="logo">
              Anymart
            </Link>
          </Navbar.Brand>
        </Nav>

        <Nav className="search">
          <input
            type="search"
            placeholder="Search your product"
            className="me-2"
            aria-label="Search"
            onChange={(e) => getText(e.target.value)}
          />
          <FcSearch className="icon" />
          <div className="search-fiter">
            {text && (
              <ListGroup hidden={liopen}>
                {products
                  .filter((val) => {
                    if (text === "") {
                      return val;
                    } else if (
                      val.title.toLowerCase().includes(text.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((val, key) => {
                    return (
                      <ListGroup.Item key={key} className="product-title">
                        <NavLink
                          to={"/getproductone/" + val.id}
                          onClick={() => setLiopen(true)}
                          className="navlink"
                        >
                          {val.title}
                        </NavLink>
                      </ListGroup.Item>
                    );
                  })}
              </ListGroup>
            )}
          </div>
        </Nav>
        <Nav className="nav-bar-profile">
          {account ? (
            <>
              <NavLink onMouseEnter={profileopen} onMouseLeave={profileopen}>
                <h4>{account.data.name[0].toUpperCase()}</h4>
                <div className="login-user">
                  {profile && (
                    <div className="profile">
                      <ul className="dropdown">
                        <li>
                          <NavLink to="/" className="profile-content">
                            Profile
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/" className="profile-content">
                            Order
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/" className="profile-content">
                            Wishlist
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/" className="profile-content">
                            Cart
                          </NavLink>
                        </li>
                        <hr></hr>
                        <li>
                          <NavLink className="profile-content" onClick={logout}>
                            Logout
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </NavLink>
            </>
          ) : (
            <NavLink to="/login">
             <IoPersonCircleSharp className="unloged"/> 
            </NavLink>
          )}

          {account ? (
            <NavLink to="/cart">
              <BsCartFill
                size={45}
                style={{ padding: 5, color: "white" }}
                className="icon cart"
              />
              <p className="cartsize">{account.data.carts.length}</p>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <BsCartFill
                size={45}
                style={{ padding: 5, color: "white" }}
                className="icon"
              />
              <p>{0}</p>
            </NavLink>
          )}
        </Nav>
      </Navbar>
    </>
  );
}

export default NavScroll;
