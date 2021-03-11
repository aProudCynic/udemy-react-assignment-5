import { ADD_PERSON, REMOVE_PERSON } from './actionTypes';

const initialState = {
    persons: [],
}

const reducer = (oldState = initialState, action) => {
    console.log('Oh hi!')
    if (action.type === ADD_PERSON) {
        return {
            ...oldState,
            persons: [...oldState.persons, action.newPerson]
        };
    }
    if (action.type === REMOVE_PERSON) {
        console.log(action.idOfPersonToRemove)
        const personsWithoutDeletedMember = oldState.persons.filter(personInState => personInState.id !== action.idOfPersonToRemove);
        return {
            ...oldState,
            persons: personsWithoutDeletedMember
        }
    }
    return oldState;
}

export default reducer;