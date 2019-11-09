import React from 'react'
import './EditProfileHeader.css'

export default function EditProfileHeader(){
    return (
        <header role="banner" className="sectionBorders">
            <div className="accountSettings-nav flexbox-between">
                <h1>[[AGENT NAME]]</h1>
                <nav role="navigation">
                    <a href="profileForm.html">X</a>
                </nav>
            </div>
        </header>
    )
}