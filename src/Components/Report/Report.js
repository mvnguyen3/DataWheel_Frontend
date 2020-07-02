import React, { useEffect, useState } from 'react';

// Platform integration
import SockJsClient from 'react-stomp';

// Property
import * as GlobalVariables from '../../Property/GlobalVariables';

const ReportComponent = props => {

    const [counter_value, setCounter_value] = useState(props.counter_value);

    let socketClient = null;

    useEffect(_ => {
        props.getCounterValue();
        props.getAverageTime();
        props.getAverageClick();
    }, [])

    useEffect(_ => {
        setCounter_value(props.counter_value);
    }, [props.counter_value])


    const handlerMessage = message => {
        const counter_value_response = message.body.counter_value;
        setCounter_value(counter_value_response);
        props.getAverageTime();
        props.getAverageClick();
    }

    const handlerMessage_count_from_zero = message => {
        const counter_value_response = message.body.counter_value;
        setCounter_value(counter_value_response);
        props.getAverageTime();
        props.getAverageClick();
    }

    return (
        <div className='reportComponentWrapper'>
            <div className='reportComponentContent'>
                <table className='table'>
                    <tbody>
                        <tr>
                            <td>Total Click: {counter_value}</td>
                        </tr>
                        <tr>
                            <td>Average Click In {props.click_rate}s: {props.average_click}</td>
                        </tr>
                        <tr>
                            <td>Average Time between clicks: {props.average_time_click}s</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <SockJsClient topics={[GlobalVariables.STOMP_CLIENT.SUBSCRIBER.COUNTER]} onMessage={message => handlerMessage(message)} url={GlobalVariables.STOMP_CLIENT.URL} ref={client => socketClient = client} />
            <SockJsClient topics={[GlobalVariables.STOMP_CLIENT.SUBSCRIBER.RESET_COUNTER]} onMessage={message => handlerMessage_count_from_zero(message)} url={GlobalVariables.STOMP_CLIENT.URL} ref={client => socketClient = client} />
        </div>
    )
}


export default ReportComponent;



















