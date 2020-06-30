import * as ActionTypes from './ActionTypes';


const INITIAL_STATE = {
    counter_value: 0,
}

const ButtonViewReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case ActionTypes.COUNTER_INCREMENT_FULFILLED:
            const incrementState = {...state};
            incrementState.counter_value = action.payload.counter_value;
            return incrementState;
        case ActionTypes.COUNTER_GET_VALUE_FULFILLED:
            const getCounterValueState = {...state};
            getCounterValueState.counter_value = action.payload.counter_value;
            return getCounterValueState;
        case ActionTypes.COUNTER_COUNT_FROM_ZERO_FULFILLED:
            const countFromZeroState = {...state};
            countFromZeroState.counter_value = action.payload.counter_value;
            return countFromZeroState;
        default: return state;        
    }
}

export default ButtonViewReducer;