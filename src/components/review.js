import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillStar } from 'react-icons/ai';
import Review_bar from './review-bar';



function Reviews() {
  return (
     <div className='Reviews'>
      <Row>
        <Col lg={4} sm={12}>
          <h1> CUSTOMER REVIEWS</h1>
          <h3>5.00</h3>
            <div className='overreview'>
            <p> <AiFillStar className='star'/> <AiFillStar className='star'/> <AiFillStar className='star'/> <AiFillStar className='star'/> <AiFillStar className='star'/> </p>
            <p > Based on 1 reviews </p>
            </div>
            
         </Col>

        <Col lg={6} sm={12} className='bar' >
        <Review_bar number={5} percentage="100%"/>
        <Review_bar number={4} percentage="0"/>
        <Review_bar number={3} percentage="0"/>
        <Review_bar number={2} percentage="0"/>
        <Review_bar number={1} percentage="0"/>
        </Col>
        <Col lg={2} sm={12}> 
         <h4 className='add'> <a href=''>ADD REVIEW</a></h4>
        </Col>
      </Row>
      </div>
  );
}

export default Reviews;