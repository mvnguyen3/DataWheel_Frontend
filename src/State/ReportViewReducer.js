import * as ActionTypes from './ActionTypes';


const INITIAL_STATE = {
    average_time_click: 0,
    average_click: 0,
    click_rate: 0,
}

const ReportViewReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case ActionTypes.COUNTER_GET_AVERAGE_TIME_FULFILLED:
            const getAverageTimeState = {...state};
            getAverageTimeState.average_time_click = action.payload.average_time_click;
            return getAverageTimeState;
        case ActionTypes.COUNTER_GET_AVERAGE_CLICK_FULFILLED:
            const averageClickState = {...state};
            averageClickState.average_click = action.payload.average_click;
            averageClickState.click_rate = action.payload.click_rate;
            return averageClickState;

       
        default: return state;        
    }
}

export default ReportViewReducer;