const REQUEST_MAPPING = '/api/v1'
const DOMAIN  = 'http://localhost:3000';
export const API_ENDPOINT = DOMAIN.concat(REQUEST_MAPPING)


export const STOMP_CLIENT = {
    URL: DOMAIN.concat('/data-wheel-websocket'),
    SUBSCRIBER: {
        COUNTER: '/topic/incremented',
        RESET_COUNTER: '/topic/countFromZero',
    },
    SENDER: {
        COUNTER: '/app/increment',
        RESET_COUNTER: '/app/countFromZero',
    },
}