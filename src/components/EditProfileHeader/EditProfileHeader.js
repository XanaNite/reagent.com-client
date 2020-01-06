import React from 'react'
import {Link} from 'react-router-dom'
import './EditProfileHeader.css'

export default function EditProfileHeader(props){
    return (
        <header role="banner" className="sectionBorders">
            <div className="EditProfileHeader-nav flexbox-between">
                <h1>{props.agent.first_name} {props.agent.last_name}</h1>
                <nav role="navigation">
                    <Link to='/myprofile'>X</Link>
                </nav>
            </div>
        </header>
    )
}