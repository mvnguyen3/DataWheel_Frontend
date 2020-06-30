import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = _ => {
    return (
        <div className='navigationBarWrapper'>
            <div className='navigationBarContent'>
                <NavLink activeClassName="successNavLink" className='btn navigation' to='/button'>Button View</NavLink>
                <NavLink activeClassName="successNavLink" className='btn navigation' to='/report'>Report View</NavLink>                
            </div>
        </div>
    )
}


export default NavigationBar;



















