import * as actionType from './actionsType';

export const create_question = (message) => {
    return {
        type: actionType.CREATE_QUESTIONS,
        message: message
    };
}

