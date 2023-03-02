const ProductReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,

            }
        case "SET_API_DATA":
            const featureData = action.payload.filter((curEle) => {
                return curEle.featured === true
            })
            return {
                ...state,
                featureProducts: featureData,
                products: action.payload,
                isLoading: false,
                isError: false,
            }

        default:
            return state;
    }

}

export default ProductReducer