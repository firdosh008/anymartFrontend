import NavScroll from "./containers/navbar"
import Footer from "./containers/footer"
import Products from "./pages/products"
import Signup from './pages/signup';
import Sigin from './pages/sigin';
import { Routes,Route } from "react-router-dom"
import Maincomp from "./pages/forntpage"
import Cart from "./pages/cart";



export default function App(){

    return (
    <div>
        <Routes> 

        <Route path="/" element={<>
         <NavScroll/>
         <Maincomp />
         <Footer />
         </>} />


          <Route path="/register" element={<>
            <NavScroll bg="black"/>
            <Signup/>
          
          </>
          } />

        <Route path="/login" element={<>
          <NavScroll bg="black"/>
          <Sigin/>
          
          </>
          } />


         <Route path="/getproductone/:id" element={<>
         <Products />
         </>} />

         <Route path="/cart" element={<>
         <Cart />
         </>} />

        </Routes>
              
    </div>
    )
    
    
}