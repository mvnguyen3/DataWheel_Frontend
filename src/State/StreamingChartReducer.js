import * as ActionTypes from './ActionTypes';

const INITIAL_STATE = {    
    click_rate_list: [],
}


const StreamingChartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case ActionTypes.COUNTER_GET_ALL_CLICK_FULFILLED:
            const getAllClickState = {...state};            
            getAllClickState.click_rate_list = action.payload.click_rate_list;
            return getAllClickState;
        default: return state;
    }
}

export default StreamingChartReducer;