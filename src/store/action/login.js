import * as actionType from './actionsType';
import { _getUsers }  from '../../utils/_DATA';

//Action Creator

export const showResult = async () =>  {
    //const updateResult = _getUsers().then(res => console.log(res))
    const updateResult = await _getUsers();
    return {
        type: actionType.LOGIN_RESULT,
        result: updateResult
        //updateResult
    };
}

//Middleware
export const login_result = () => {
    //thunk -> return a function
    return async dispatch => {
        dispatch(await showResult())
        // }, 2000);
        //thunk
        // setTimeout(() => {
        //     dispatch(saveResult(res))
        // }, 2000);
    }
};
