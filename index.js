const { createStore } = require("redux");

//defining constants
const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

//state
const initialCounterState = {
	count: 0,
};

const initialUsersState = {
	users: [{ name: "", email: "" }],
	count: 0,
};

//action return a object {type, payload}
//for INCREMENT Counter
const incrementCounterAction = () => {
	return { type: INCREMENT };
};
const incrementCounterActionByValue = (value) => {
	return { type: INCREMENT_BY_VALUE, payload: value };
};
//for DECREMENT Counter
const decrementCounterAction = () => {
	return { type: DECREMENT };
};

//for ADD USER we need to send data so we need payload
const addUserAction = (user) => {
	return {
		type: ADD_USER,
		payload: user,
	};
};

//create reducer for counter action
const counterReducer = (state = initialCounterState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				count: state.count + 1,
			};
		case INCREMENT_BY_VALUE:
			return {
				...state,
				count: state.count + action.payload,
			};
		case DECREMENT:
			return {
				...state,
				count: state.count - 1,
			};
		default:
			state;
	}
};

const userReducer = (state = initialUsersState, action) => {
	switch (action.type) {
		case ADD_USER:
			const isAnyUserHere = state.count;
			// console.log(state.users.name);
			if (!isAnyUserHere) {
				return {
					users: [action.payload],
					count: state.count + 1,
				};
			} else {
				return {
					users: [...state.users, action.payload],
					count: state.count + 1,
				};
			}

		default:
			state;
	}
};

const store = createStore(userReducer);
// createStore has 3 methods subscribe , getState and dispatch
// console.log(store);
store.subscribe(() => {
	console.log(store.getState());
});

//dispatch action
// store.dispatch(incrementCounterAction());

// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(incrementCounterActionByValue(5));
// store.dispatch(incrementCounterActionByValue(10));

store.dispatch(addUserAction({ name: "Aditya", email: "aditya@gmail.com" }));
store.dispatch(addUserAction({ name: "Aditya2", email: "aditya2@gmail.com" }));
