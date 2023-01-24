//state - count: 0
//action - increment, decrement, reset
//reducer

const { createStore } = require("redux");

//store
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

//state initialization
const initialState = {
	count: 0,
};
//action initialization
const incrementAction = () => {
	return { type: INCREMENT };
};
const decrementAction = () => {
	return { type: DECREMENT };
};
const resetAction = () => {
	return { type: RESET };
};

//Reducer initialization
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				count: state.count + 1,
			};

		case DECREMENT:
			return {
				...state,
				count: state.count - 1,
			};
		case RESET:
			return {
				...state,
				count: 0,
			};
		default:
			return state;
	}
};
//store the state
const store = createStore(reducer);

//subscribe the createStore method for see the state change event
store.subscribe(() => console.log(store.getState()));

//dispatching actions
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(resetAction());
