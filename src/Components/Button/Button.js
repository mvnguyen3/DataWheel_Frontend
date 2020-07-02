import React, { useState, useEffect } from 'react';
import ButtonResult from './ButtonResult';
import ButtonClearCounter from './ButtonClearCounter';

// Platform integration
import SockJsClient from 'react-stomp';

// Property
import * as GlobalVariables from '../../Property/GlobalVariables';
import StreamingChart from '../../Containers/StreamingChart/StreamingChart';

const ButtonComponent = props => {

    const [counter_value, setCounter_value] = useState(props.counter_value);

    let socketClient = null;

    const incrementCounterMethod = _ => {       
       socketClient.sendMessage(GlobalVariables.STOMP_CLIENT.SENDER.COUNTER, counter_value + 1);    
    }

    const countFromZero = _ => {
        socketClient.sendMessage(GlobalVariables.STOMP_CLIENT.SENDER.RESET_COUNTER);   
    }
    

    useEffect(_ => {
        props.getCounterValue();
    }, [])

    useEffect(_ => {
        setCounter_value(props.counter_value);
     
    }, [props.counter_value])    

    const incrementCallBack = message => {        
        const counter_value_response = message.body.counter_value;
        setCounter_value(counter_value_response); 
        props.getAllClicks();   
    }

    const handlerMessage_count_from_zero = message => {
        const counter_value_response = message.body.counter_value;
        setCounter_value(counter_value_response);       
    }

    return (
        <div className='buttonViewWrapper'>
            <div className='buttonViewContent'>
                <button className='btn btn-success' onClick={incrementCounterMethod}>+1</button>
            </div>
            <ButtonResult counter={counter_value} />
            {/* <ButtonClearCounter countFromZero={countFromZero} /> */}
            <StreamingChart />

            <SockJsClient topics={[GlobalVariables.STOMP_CLIENT.SUBSCRIBER.COUNTER]} onMessage={message => incrementCallBack(message)} url={GlobalVariables.STOMP_CLIENT.URL} ref={client => socketClient = client} />
            <SockJsClient topics={[GlobalVariables.STOMP_CLIENT.SUBSCRIBER.RESET_COUNTER]} onMessage={message => handlerMessage_count_from_zero(message)} url={GlobalVariables.STOMP_CLIENT.URL} ref={client => socketClient = client} />            
        </div>
    )
}


export default ButtonComponent;



















