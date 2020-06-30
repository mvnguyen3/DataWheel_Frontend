import React, { useEffect, useState } from 'react';

// Platform integration
import SockJsClient from 'react-stomp';

// Property
import * as GlobalVariables from '../../Property/GlobalVariables';

const ReportComponent = props => {

    const [counter_value, setCounter_value] = useState(props.counter_value);
    const [average_time_click, setAverage_time_click] = useState(props.average_time_click);
    let socketClient = null;

    useEffect(_ => {
        props.getCounterValue();
        props.getAverageTime();
    }, [])

    useEffect(_ => {
        setCounter_value(props.counter_value);        
    }, [props.counter_value])

    useEffect(_ => {        
        setAverage_time_click(props.average_time_click);
    }, [props.average_time_click])
    
    
    const handlerMessage = message => {                
        const counter_value_response = message.body.counter_value;
        setCounter_value(counter_value_response);
        props.getAverageTime();
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
                            <td>Average Click: </td>
                        </tr>
                        <tr>
                            <td>Average Time between clicks: {average_time_click}s</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <SockJsClient topics={[GlobalVariables.STOMP_CLIENT.SUBSCRIBER.COUNTER]} onMessage={message => handlerMessage(message)} url={GlobalVariables.STOMP_CLIENT.URL} ref={client => socketClient = client} />
        </div>
    )
}


export default ReportComponent;



















