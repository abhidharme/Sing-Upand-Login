import { SIGNUP_FAILURE , SIGNUP_SUCCESS , SIGNUP_LOADING } from "./action";

const initState = {
    loading: false,
    isAuthention: false,
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: "",
    error: false
}

export const singupReducer = (store = initState , {type , payload})=> {
switch (type){
    case SIGNUP_LOADING:
        return {...store , 
        loading: true
    }
    case SIGNUP_SUCCESS:
        return {...store , 
        loading: false,
        name: payload.name,
        email: payload.email,
        password: payload.password,
        username: payload.username,
        mobile: payload.mobile,
        description: payload.description,
        isAuthention: true,
        error:false
        };
    case SIGNUP_FAILURE:
        return {...store , 
        loading:false,
        isAuthention: false,
        error:true
        }
    default:
        return store;
}

}