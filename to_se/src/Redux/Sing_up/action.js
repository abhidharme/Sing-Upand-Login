
export const SIGNUP_LOADING = "SIGNUP_LOADING";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const signupLoading = ()=> ({
    type: SIGNUP_LOADING
});

export const signupSuccess = (payload)=> ({
    type: SIGNUP_SUCCESS,
    payload
});

export const signupError = ()=>({
    type: SIGNUP_FAILURE
});


export const SignInto = (name, email , password , username , mobile , description) => (dispatch)=>{
    dispatch(signupLoading());
   fetch(" https://masai-api-mocker.herokuapp.com/auth/register" , {
       method: "POST",
       body: JSON.stringify(name, email , password , username , mobile , description),
       headers: {
           "Content-Type" : "application/json"
       }
   }).then((res) => res.json())
   .then((res) =>{  
       dispatch(signupSuccess(name, email , password , username , mobile , description))
     
   }) 
   .catch((err)=> dispatch(signupError( )))
}