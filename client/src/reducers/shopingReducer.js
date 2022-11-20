function shopingReducer(state = [], action) {
    if (action.type === "ADD") {
        const products = state.find(e => e === action.payload);
        if(!products) return [...state, action.payload]
        return [...state]
    }
    if (action.type === "DEL") {
        const stateFiltered = state.filter((e) =>  e.id !== action.payload )
        return stateFiltered
    }
    if (action.type === "REST") {
        return []
    }
    return state;
}

export default shopingReducer;