import { getProductsreducer } from "./productreducer";
import {combineReducers} from 'redux'


const rootReducer = combineReducers({   
    getProductsdata:getProductsreducer
})

export default rootReducer