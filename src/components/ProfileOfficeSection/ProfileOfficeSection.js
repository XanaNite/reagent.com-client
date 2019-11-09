import React from 'react'
import './ProfileOfficeSection.css'

export default function ProfileOfficeSection(){
    return (
        <section className="office-section profileMain-section">
            <div className="office-container">
                <h3>Office info</h3>
                <div className="officeInfo">
                    <h4>Name</h4>
                    <p>[[NAME]]</p>
                    <h4>Address</h4>
                    <p>[[ADDRESS]]</p>
                    <h4>Phone</h4>
                    <p>[[TYPE]]</p>
                    <p>[[#]]</p>
                    <p>[[TYPE]]</p>
                    <p>[[#]]</p>
                </div>
            </div>
        </section>
    )
}