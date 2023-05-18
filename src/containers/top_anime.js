import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/product';
import a1 from "../assets/a1.webp"
import a2 from "../assets/a2.webp"
import a3 from "../assets/a3.webp"
import a4 from "../assets/a4.webp"
import a5 from "../assets/a5.webp"
import a6 from "../assets/a6.webp"
import a7 from "../assets/a7.webp"
import a8 from "../assets/a8.webp"


function Top_anime() {
  return (
    <div className='top_categories'>
        <br/><br/>
        <h1>TOP ANIME</h1>
    <div className='ca-container'>
      <Row>
        <Col xs={12} md={6} lg={3} ><Product src={a1} class="ca-img"/></Col>
        <Col xs={12} md={6} lg={3} ><Product src={a2} class="ca-img"/></Col>
        <Col xs={12} md={6} lg={3} ><Product src={a3} class="ca-img"/></Col>
        <Col xs={12} md={6} lg={3} ><Product src={a4} class="ca-img"/></Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={3}><Product src={a5}  class="ca-img"/></Col>
        <Col xs={12} md={6} lg={3}><Product src={a6}  class="ca-img"/></Col>
        <Col xs={12} md={6} lg={3}><Product src={a7}  class="ca-img"/></Col>
        <Col xs={12} md={6} lg={3}><Product src={a8}  class="ca-img"/></Col>
      </Row>
      </div>
    </div>
  );
}

export default Top_anime;