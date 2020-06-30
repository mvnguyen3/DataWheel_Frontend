import React from 'react'

const ButtonResult = props => {
    return (
        <div className='ButtonResultWrapper'>
            <div className='ButtonResultContent'>
                <p>Total Click: <span>{props.counter}</span></p>
            </div>
        </div>
    )
}

export default ButtonResult;