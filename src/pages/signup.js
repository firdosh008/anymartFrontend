import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FcGoogle} from 'react-icons/fc';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import bg from '../assets/signup-bc.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Signup() {

  const [userdata, setUserdata] = useState({
    name:"",
    email:"",
    mobile:"",
    password:"",
    cpassword:"",
  });

  const adduser = (e) => {
    const { name, value } = e.target;
    setUserdata(()=>
      {
        return{
          ...userdata,
          [name]:value
        }
      }
    );
  };

  const senddata = async (e) => {
    e.preventDefault();
    const { name, email,mobile, password, cpassword } = userdata;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, email, mobile, password, cpassword
      }),
    });
    const data = await res.json();
   // console.log(res.status);

    if (res.status === 422 || !data) {
      toast.warn(data.error,{
        position:"top-center",
      });
      //window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      toast.success("Registration Successfull Go to Siginpage",{
        position:"top-center",
      });

     // window.alert("Registration Successfull");
      console.log("Registration Successfull");
      setUserdata({...userdata,
        name:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:"",
      });
    }
  };


  return (
    <div className='sign' style={{backgroundImage:`url(${bg})` , backgroundSize: 'cover',backgroundRepeat: 'no-repeat',}}>
    <div className='signin'>
      <Row style={{width:"100%"}}>
        <Col className='signin-col1'>
          <form method='POST'>
         <h1>Register Now</h1>
         <p>Enter the infromation Correctly</p>
          <h3>Sign up with</h3>
          <button className='btn'><FcGoogle className='icon g'/></button>
          <p className='self'>Or continue with</p>
          <h3>Name</h3>
          <input className='input' name="name" type="text"  onChange={adduser} value={userdata.name} />
          <Row>
          <Col lg={6} md={12} sm={12}> <h3>Email Address</h3>
          <input className='input' name="email" type="email"  onChange={adduser} value={userdata.email} />
          </Col>
          <Col lg={6} md={12} sm={12}><h3>Mobile Number:</h3>
          <input className='input' name="mobile" type="number"  onChange={adduser} value={userdata.mobile} />
          </Col>
          </Row>

          <Row>
          <Col lg={6} md={12} sm={12}> <h3>Password</h3>
          <input className='input' name="password" type="password"  onChange={adduser} value={userdata.password} />
          </Col>
          <Col lg={6} md={12} sm={12}><h3>Confirm Password</h3>
          <input className='input' name="cpassword" type="password" onChange={adduser} value={userdata.cpassword}/>
          </Col>
          </Row>

          <div className='error'>
          <input className='c-input' type="checkbox" />
          <p className='R'>Remember me</p>
          </div>
           <button className='sig-btn' onClick={senddata}>Sign up</button>
           <p>Already have an account? <Link to="/login">Signin here</Link></p>
           </form>
        </Col>
      </Row>
      <ToastContainer />
      </div>
      </div>
  );
}

export default Signup;