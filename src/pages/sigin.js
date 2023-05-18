import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FcGoogle} from 'react-icons/fc';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import bg from '../assets/signup-bc.jpg';
import { Link ,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from "../components/contexProvider";
import { useContext } from "react";


function Signin() {

  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
  });
  
  //console.log(logindata);

  const history = useNavigate("");

  const {account , setAccount} = useContext(LoginContext);

  const addlogin = (e) => {
    const { name, value } = e.target;
    setLogindata(()=>
      {
        return{
          ...logindata,
          [name]:value
        }
      }
    );
  };

  const senddata = async(e)=>{
    e.preventDefault();
    const { email, password } = logindata;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email, password
      }),
    });
    const data = await res.json();
    console.log(data);

    if (res.status === 401 || !data || res.status === 403 ||  res.status === 404 )  {
      toast.error(data.error,{
        position:"top-center",
        autoClose:2000,
      });
    }
    else if(res.status === 402){
      toast.warn(data.error,{
        position:"top-center",
        autoClose:2000,
      });
    }

    else {
      console.log("Login Successfull");
      setLogindata({...logindata, email:"", password:""});
      setAccount(data);
      console.log(data);
      history("/");
      toast.success("login Successfull",{
        position:"top-center",
      });
    }
  }

  



  return (
    <div className='sign' style={{backgroundImage:`url(${bg})` , backgroundSize: 'cover',backgroundRepeat: 'no-repeat',}}>
    <div className='signin'>
      <Row style={{width:"100%"}}>
        <Col lg={12} md={12} sm={12} className='signin-col1'>
          <form method='POST'>
         <h1>Welcome back👋</h1>
         <p>Enter the infromation you entered while registering</p>
          <h3>Sign in with</h3>
          <button className='btn'><FcGoogle className='icon g'/></button>
          <button className='btn'><BsFacebook className='icon f'/></button>
          <button className='btn'><AiFillTwitterCircle className='icon t'/></button>
          <p className='self'>Or continue with</p>
          <Row>
          <Col lg={6} md={12} sm={12}> <h3>Email Address</h3>
          <input className='input' name='email' type="email" 
          onChange={addlogin} 
          value={logindata.email} />
          </Col>
          <Col lg={6} md={12} sm={12}><h3>Password</h3>
          <input className='input' name='password' type="text"
           onChange={addlogin} 
           value={logindata.password} />
          </Col>
          </Row>
          <div className='error'>
          <input className='c-input' name='check' type="checkbox" />
          <p className='R'>Remember me</p>
          <p className='fp'> <a href=''>Forgot your Password</a></p>
          </div>
          
          <button className='sig-btn' onClick={senddata}>Sign in</button>
          <p>Don't have an account? <Link to="/register">Sign up here</Link></p>
          </form>
        </Col>
      </Row>
      <ToastContainer />
      </div>
      </div>
  );
}

export default Signin;