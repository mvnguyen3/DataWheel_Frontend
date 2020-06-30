const REQUEST_MAPPING = '/api/v1'
const DOMAIN  = 'http://localhost:3000';
export const API_ENDPOINT = DOMAIN.concat(REQUEST_MAPPING)


export const STOMP_CLIENT = {
    URL: DOMAIN.concat('/data-wheel-websocket'),
    SUBSCRIBER: {
        COUNTER: '/topic/incremented',
    },
    SENDER: {
        COUNTER: '/app/increment',
    },
}