import * as actionType from './actionsType';
import { _getUsers }  from '../../utils/_DATA';

//Action Creator

export const saveResult = () =>  {
    const updateResult = _getUsers().then(res => console.log(res))
    //const updateResult = await _getUsers();
    return {
        type: actionType.LOGIN_RESULT,
        result: updateResult
    };
}

//Middleware
export const login_result = () => {
    //thunk -> return a function
    return dispatch => {
        dispatch(saveResult())
        // }, 2000);
        //thunk
        // setTimeout(() => {
        //     dispatch(saveResult(res))
        // }, 2000);
    }
};
