export default (state, action) => {

	const { payload, type } = action;

	switch(type){
		case "GET_PRODUCTS":
		return {
			...state,
			products: payload,
			error: {},
			loading: false
		}
		case "GET_CATEGORIES":
		return {
			...state,
			categories: payload
		}
		case "ERROR":
		return {
			...state,
			error: payload,
			loading: false 
		}
		case "LOADING":
		return {
			...state,
			loading: true
		}
		default:
		return state;
	}
}