import {TOGGLE} from './constants';

const INITIAL_STATE = {
    toggleValue: false
};

const app = (initialState = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE:
            return {...initialState, toggleValue: action.value};
        default:
            return initialState;
    }
};

export default {app};