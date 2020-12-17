//import redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//Reducer, close to state
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            //Copy not mutate
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            //Copy not mutate
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};

//Store 
const store = createStore(rootReducer);
//Pull out state from store
store.getState();

// Subscription, not manually change i the console  
store.subscribe(()=> {
    //Get state here to know something change
    console.log('[Subscription]', store.getState())
});

//Dispatch Action, object (must type)
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
