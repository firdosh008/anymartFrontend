import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import c1 from "../assets/c1.webp" 
import c2 from "../assets/c2.webp" 
import c3 from "../assets/c3.webp" 
import c4 from "../assets/c4.webp" 
import c5 from "../assets/c5.webp"
import Product from '../components/product'; 

export class OwlDemo extends Component {  
    state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3,
            },
        },
    }
        render()  
        {      
          return (   
        <div class='container-fluid carousle' >   
          <OwlCarousel items={3}  autoplay ={true}  loop={true}  responsive={this.state.responsive} >  
           <Product src={c1}/>  
           <Product src={c2}/>
           <Product src={c3}/>  
           <Product src={c4}/>
           <Product src={c5}/>
      </OwlCarousel>  
      </div>  
  
          )  
        }  
      }  
        
  
export default OwlDemo 