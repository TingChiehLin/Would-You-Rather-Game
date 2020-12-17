import { addNewComment } from './action';

function todoreducer(state = [], action) {

    switch(action.type) {
        case ASK_QUESTION:
            return state.concat([action.todo])
        
        default:
            return state
    }

    
    if (action.type === ASK_QUESTION) {
        return [
            ...state    ,
            {
                
            }
        ]
    } else if (action.type === 'test') {
        return state.filter(todo => todo.id !== action.id)
    }

    if (action.type === Add_New_User) {
        return state.concat()
    }


    return state
    // const update = {...state};
}


//The State
function createStore(reducer) {
    let state
    let listeners = []

    const getState = () => state
    //Get the state

    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter((e)=> e !== listener)
        }
    }

    return {
        getState,
        subscribe
    }
}

const store = createStore(todoreducer)

//Listening to changes on the state
store.subscribe(()=> {
    console.log("The store changed", store.getState());

})

store.unsubscribe = store.subscribe(()=> {
    console.log("The store changed");
})

//Update the state by action

const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => {
        listener()
    });
}