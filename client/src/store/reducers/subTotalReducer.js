function subTotalReducer (state = 0, action) {
    if (action.type === "Add") {
        return action.payload
    }

    if (action.type === "plus") {
        return state + action.payload
    }

    if (action.type === "less") {
        return state - action.payload
    }

    if (action.type === "REST") {
        return 0
    }

    return state
};

export default subTotalReducer;