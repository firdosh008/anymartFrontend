import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/product';
import tc1 from "../assets/tc1.webp"
import tc2 from "../assets/tc2.webp"
import tc3 from "../assets/tc3.webp"
import tc4 from "../assets/tc4.webp"
import tc5 from "../assets/tc5.webp"
import tc6 from "../assets/tc6.webp"
import tc7 from "../assets/tc7.webp"
import tc8 from "../assets/tc8.webp"


function top_Categories() {
  return (
    <div className='top_categories'>
        <br/><br/>
        <h1>TOP CATEGORIES</h1>
    <div className='ca-container'>
      <Row>
        <Col xs={12} md={6} lg={3} ><Product src={tc1} class="ca-img"/></Col>
        <Col xs={12} md={6} lg={3} ><Product src={tc2} class="ca-img"/></Col>
        <Col xs={12} md={6} lg={3} ><Product src={tc3} class="ca-img"/></Col>
        <Col xs={12} md={6} lg={3} ><Product src={tc4} class="ca-img"/></Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={3}><Product src={tc5}  class="ca-img"/></Col>
        <Col xs={12} md={6} lg={3}><Product src={tc6}  class="ca-img"/></Col>
        <Col xs={12} md={6} lg={3}><Product src={tc7}  class="ca-img"/></Col>
        <Col xs={12} md={6} lg={3}><Product src={tc8}  class="ca-img"/></Col>
      </Row>
      </div>
    </div>
  );
}

export default top_Categories;