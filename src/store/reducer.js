import { ADD_PERSON } from './actionTypes';

const initialState = {
    persons: [],
}

const reducer = (oldState = initialState, action) => {
    if (action.type === ADD_PERSON) {
        return { ...oldState,
            persons: [...oldState.persons, action.newPerson] };
    }
    return oldState;
}

export default reducer;