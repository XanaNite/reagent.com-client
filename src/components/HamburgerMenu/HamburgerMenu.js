import React from 'react'
import {Link} from 'react-router-dom'
import {slide as Menu} from 'react-burger-menu'
import './HamburgerMenu.css'

export default props => {
    return(
        <Menu>
            <ul>
                <li><Link to='/' className='bugerLink'>REagent Home</Link></li>
                <li><Link to='/dashboard' className='bugerLink'>Dashboard Home</Link></li>
                <li><Link to='/myprofile' className='bugerLink'>Update Your Profile</Link></li>
            </ul>
        </Menu>
    );
}