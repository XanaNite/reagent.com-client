import React from 'react'
import {Link} from 'react-router-dom'
import './EditProfileHeader.css'

export default function EditProfileHeader(){
    return (
        <header role="banner" className="sectionBorders">
            <div className="EditProfileHeader-nav flexbox-between">
                <h1>[[AGENT NAME]]</h1>
                <nav role="navigation">
                    <Link to='/myprofile'>X</Link>
                </nav>
            </div>
        </header>
    )
}