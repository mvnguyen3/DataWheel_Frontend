import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';

// Reducers
import ButtonViewReducer from './State/ButtonViewReducer';
import ReportViewReducer from './State/ReportViewReducer';
import StreamingChartReducer from './State/StreamingChartReducer';

const myLogger = _=> next => action => {
    console.log("logged action: ", action);
    next(action);
}

export default createStore(
    combineReducers({
        // Reducers go here
        ButtonViewReducer,
        ReportViewReducer,
        StreamingChartReducer,

    }),
    {},
    applyMiddleware(myLogger, promise)
)










