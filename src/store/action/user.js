import * as actionType from './actionsType';
import { _getUsers }  from '../../utils/_DATA';
import { hideLoading, showLoading } from 'react-redux-loading';

//Action Creator

export const showResult = async () =>  {
    //const updateResult = _getUsers().then(res => console.log(res))
    const updateResult = await _getUsers();
    return {
        type: actionType.LOGIN_RESULT,
        result: updateResult
    };
}

export const set_userstate = (userID) => {
    return {
        type: actionType.SET_USERSTATE,
        userID: userID
    };
};

export const user_result = (res) => {
    //thunk -> return a function
    return async dispatch => {
        dispatch(showLoading())
        dispatch(await showResult(res))
        dispatch(hideLoading())
        // }, 2000);
        //thunk
        // setTimeout(() => {
        //     dispatch(saveResult(res))
        // }, 2000);
    }
};

