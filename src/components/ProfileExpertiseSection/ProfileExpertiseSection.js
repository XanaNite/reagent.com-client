import React from 'react'
import './ProfileExpertiseSection.css'

export default function ProfileExpertiseSection(){
    return (
        <section className="expertise-section profileMain-section">
            <div className="expertise-container">
                <h3>Expertise</h3>
                <div className="expertise-designationCerts">
                    <h4>Designation & Certification badges</h4>
                    <p>No designations or certifications on your profile yet</p>
                    <a href="">What badges can I earn?</a>
                </div>
                <div className="expertise-lang">
                    <h4>Languages spoken</h4>
                    <p>Add additional languages so they can appear on your profile</p>
                    <a href="editProfile.html">Edit</a>
                </div>
            </div>
        </section>
    )
}