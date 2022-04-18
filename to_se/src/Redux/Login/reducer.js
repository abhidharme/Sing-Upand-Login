import { LOGIN_FAILURE ,  LOGIN_SUCCESS , LOGIN_LOADING} from "./action";

const initState = {
    loading:false,
    isAuthenticated:false,
    token: "",
    username:"",
    error: false
}

export const loginReducer = (store = initState  , {type , payload}) =>{
    switch (type){
        case LOGIN_LOADING:
            return{...store , 
            loading: true
        }
        case LOGIN_SUCCESS:
            return{...store , 
            loading:false,
            isAuthenticated:true,
            token:payload.token,
            username: payload.username,
            error: false
        }
        case LOGIN_FAILURE:
            return{...store ,
            loading:false,
            error:true
        }
        default:
            return store
    }
}