import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Initial state
const initialState = {
    persons: [
        {
            id: 1,
            fullName: "J.D Bakshi",
            email: "jd.bakshi@ghi.com",
            phone: "9090909090",
            city: "Bengaluru",
            state: "Karnataka"
        },
        {
            id: 2,
            fullName: "S.K Sharma",
            email: "sk.sharma@ghi.com",
            phone: "9090909090",
            city: "Bengaluru",
            state: "Karnataka"
        },
    ],
    counter: 0
}

// actions

// add person
export const addPerson = (person) => {
    return {
        type: "ADD_PERSON",
        payload: person,
    };
};

// delete person
export const deletePerson = (id) => {
    return {
        type: "DELETE_PERSON",
        payload: id,
    };
};

// reducer
const personReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_PERSON":
            // console.log(action.payload);
            return {
                // persons: [...state.persons, action.payload.person],
                ...state,
                persons: [...state.persons, action.payload],
            };
        case "DELETE_PERSON":
            return {
                ...state,
                persons: state.persons.filter((person) => person.id !== action.payload),
            };
        default:
            return state;
    }
}

// create store
const store = createStore(personReducer, composeWithDevTools());

export default store;