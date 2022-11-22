function shopingReducer(state = JSON.parse(sessionStorage.getItem("carrito")), action) {

    if (state === null) {
        state = []
    }

    if (action.type === "ADD") {
        const product = state.find(e => e._id === action.payload._id);
        if(!product) {
            sessionStorage.setItem("carrito", JSON.stringify([...state, action.payload]));
            return [...state, action.payload]
        }else {
            sessionStorage.setItem("carrito", JSON.stringify([...state]));
            return [...state]
        }
        
    }
    if (action.type === "DEL") {
        const stateFiltered = state.filter((e) => e._id !== action.payload);
        sessionStorage.setItem("carrito", JSON.stringify(stateFiltered));
        return stateFiltered
    }
    
    if (action.type === "REST") {
        sessionStorage.setItem("carrito", JSON.stringify([]));
        return []
    }

    return state;
}

export default shopingReducer;