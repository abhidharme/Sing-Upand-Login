import { PRODUCTS_LOADING , PRODUCTS_SUCCESS , PRODUCTS_FAILURE } from "./action";

const initState = {
    loading: false,
    error: false,
    products: []
}

export const productReducer = (store= initState , {type , payload}) => {
    switch (type){
        case PRODUCTS_LOADING:
            return {...store , 
            loading:true
        }
        case PRODUCTS_SUCCESS:
            return{...store , 
            loading:false,
            products: [...payload],
            error:false
        }
        case PRODUCTS_FAILURE:
            return{...store , 
            loading: false,
            error: true
        }

         default:
             return store;   
    }
}