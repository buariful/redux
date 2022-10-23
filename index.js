const { createStore, applyMiddleware } = require('redux');
const { default: logger } = require('redux-logger');

// 1. state, 2.reducer, 3.create store, 4. dispatch action....



// define varaible jkono
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADDUSER = "ADDUSER";

//=========================================  
// 1. state 
// ==================================================

const counterState = {
    count: 0,
    user: ["ami", "tumi"]
}

// =========== action -object - type,payload 
const increment = () => {
    return {
        type: INCREMENT,
    }
}
const decrement = () => {
    return {
        type: DECREMENT,
    };
}
const addUser = (user) => {
    return {
        type: ADDUSER,
        payload: user,
    };
}

//=========================================  
// 2. reducer 
// ==================================================
const abc = (state = counterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
        case ADDUSER:
            return {
                count: state.count + 1,
                user: [...state.user, action.payload]
            }

        default:
            state;
    }
}

//=========================================  
// 3. store 
// ==================================================
const store = createStore(abc, applyMiddleware(logger));

store.subscribe(() => {
    console.log(store.getState());
})

//=========================================  
// 4. dispatch action
// ==================================================
store.dispatch({ type: INCREMENT })
store.dispatch(increment())
store.dispatch({ type: INCREMENT })
store.dispatch({ type: INCREMENT })
store.dispatch({ type: DECREMENT })
store.dispatch(addUser('sappo'))