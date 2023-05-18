import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function footer() {
  return (
    <div className='footer'>
      <Row>
        <Col lg={3} md={4} sm={12} ><ls>
        <ul><a href=''><h1>MAIN LINKS</h1></a></ul>
        <ul><a href=''><p>New Arrivals</p></a></ul>
        <ul><a href=''><p>Gift Combos</p></a></ul>
        <ul><a href=''><p>Clearance Zone</p></a></ul>
        <ul><a href=''><p>Coupons & Offers</p></a></ul>
        <ul><a href=''><p>Photos & Reviews</p></a></ul>
        </ls></Col>
        <Col lg={3} md={4} sm={12} ><ls>
        <ul><a href=''><h1>SIDE LINKS</h1></a></ul>
        <ul><a href=''><p>100 Days Return policy</p></a></ul>
        <ul><a href=''><p>Shipping & Tracking</p></a></ul>
        <ul><a href=''><p>Privacy Policy</p></a></ul>
        <ul><a href=''><p>Terms & Conditons</p></a></ul>
        </ls></Col>
        <Col lg={3} md={4} sm={12} ><ls>
        <ul><a href=''><h1>Also Available On</h1></a></ul>
        <ul><a href=''><p>Amazon</p></a></ul>
        <ul><a href=''><p>Myntra</p></a></ul>
        <ul><a href=''><p>Flipkart</p></a></ul>
        </ls></Col>
        <Col lg={3} md={4} sm={12} ><a href=''><h1> </h1></a></Col>
      </Row>
      <div>
        <h2>@Zero_2023</h2>
      </div>
    </div>
  );
}

export default footer;