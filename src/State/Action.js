import * as ActionTypes from './ActionTypes';
import {API_ENDPOINT} from '../Property/GlobalVariables';

export const incrementCounter = value => {
    return ({
        type: ActionTypes.COUNTER_INCREMENT,
        payload: new Promise((resolve, reject) => {
            fetch(API_ENDPOINT.concat('/increment?counter=').concat(value), {
                method: 'POST',
            }).then(response => response.json())
                .then(responseJson => resolve(responseJson))
                .catch(error => reject(error))
        })
    })
}

export const getCounterValue = _ => {
    return ({
        type: ActionTypes.COUNTER_GET_VALUE,
        payload: new Promise((resolve, reject) => {
            fetch(API_ENDPOINT.concat('/getCounterValue'), {
                method: 'GET',
            }).then(response => response.json())
                .then(responseJson => resolve(responseJson))
                .catch(error => reject(error))
        })
    })
}


export const countFromZero = _ => {
    return ({
        type: ActionTypes.COUNTER_COUNT_FROM_ZERO,
        payload: new Promise((resolve, reject) => {
            fetch(API_ENDPOINT.concat('/countFromZero'), {
                method: 'DELETE',
            }).then(response => response.json())
                .then(responseJson => resolve(responseJson))
                .catch(error => reject(error))
        })
    })
}

export const getAverageTime = _=> {
    return({
        type: ActionTypes.COUNTER_GET_AVERAGE_TIME,
        payload: new Promise((resolve, reject) => {
            fetch(API_ENDPOINT.concat('/getAverageTime'), {
                method: 'GET',
            }).then(response => response.json())
                .then(responseJson => resolve(responseJson))
                .catch(error => reject(error))
        })
    })
}










