export const PRODUCTS_LOADING = "PRODUCTS_LOADING";
export const PRODUCTS_SUCCESS = "PRODUCTS_SUCCEsS";
export const PRODUCTS_FAILURE = "PRODUCTS_FAILURE";

export const productLoading = () => ({
    type:PRODUCTS_LOADING
});

export const productSuccess = (payload) => ({
    type:PRODUCTS_SUCCESS,
    payload
});

export const productFailure = ()=> ({
    type: PRODUCTS_FAILURE
});