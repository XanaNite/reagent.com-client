import React from 'react'
import './UpdateProfilePage.css'

export default function UpdateProfilePage(){
    return(
        <>
        <section class="agentProfile-section">
            <a href="../agentProfile.html">View Profile</a>
            <div class="profileBanner">
                <img src="../images/placeholderProfile.png" alt="Profile image" />
                <div class="profileBanner-name">
                    <h2>[[AGENT NAME]]</h2>
                </div>
            </div>
        </section>
        <div class="agentProfile-container">
            <section class="aboutMe-section profileMain-section">
                <div class="aboutMe-container">
                    <h3>About Me</h3>
                    <div class="aboutMe-name">
                        <h4>Name</h4>
                        <p>[[AGENT NAME]]</p>
                        <h4>Suffix</h4>
                        <p>Not entered</p>
                        <h4>Nickname</h4>
                        <p>Not entered</p>
                    </div>
                    <div class="aboutMe-contact">
                        <h4>Phone number</h4>
                        <p>[[#]]</p>
                        <p>[[TYPE]]</p>
                        <h4>Contact email address</h4>
                        <p>reagent@gmail.com</p>
                    </div>
                    <div class="aboutMe-proDetails">
                        <h4>Professional title</h4>
                        <p>Not entered</p>
                        <h4>Years of experience</h4>
                        <p>Not entered</p>
                        <h4>Who do you work with?</h4>
                        <p>Not entered</p>
                        <h4>Specialties</h4>
                        <p>Not entered</p>
                        <h4>Areas served</h4>
                        <p>Not entered</p>
                        <h4>Zip codes served</h4>
                        <p>Not entered</p>
                        <h4>Website</h4>
                        <p>Not entered</p>
                        <h4>Video URL</h4>
                        <p>Not entered</p>
                        <h4>Slogan</h4>
                        <p>Not entered</p>
                        <h4>Bio</h4>
                        <p>Not entered</p>
                    </div>
                    <a href="editProfile.html">Edit</a>
                </div>
            </section>
            <section class="expertise-section profileMain-section">
                <div class="expertise-container">
                    <h3>Expertise</h3>
                    <div class="expertise-designationCerts">
                        <h4>Designation & Certification badges</h4>
                        <p>No designations or certifications on your profile yet</p>
                        <a href="">What badges can I earn?</a>
                    </div>
                    <div class="expertise-lang">
                        <h4>Languages spoken</h4>
                        <p>Add additional languages so they can appear on your profile</p>
                        <a href="editProfile.html">Edit</a>
                    </div>
                </div>
            </section>
            <section class="mlsInfo-section profileMain-section">
                <div class="mlsInfo-container">
                    <h3>MLS info</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>MLS NAME</th>
                                <th>MLS ID</th>
                            </tr>
                            <tr>
                                <td>[[MLS]]</td>
                                <td>[[#]]</td>
                            </tr>
                        </thead>
                    </table>
                    <p>If you want to add or remove MLS accounts, give us a call.</p>
                </div>
            </section>
            <section class="brokerage-section profileMain-section">
                <div class="brokerage-container">
                    <h3>Brokerage firm info</h3>
                    <div class="brokerageInfo">
                        <h4>Firm name</h4>
                        <p>[[NAME]]</p>
                    </div>
                </div>
            </section>
            <section class="office-section profileMain-section">
                <div class="office-container">
                    <h3>Office info</h3>
                    <div class="officeInfo">
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
            <section class="licensed-section profileMain-section">
                <div class="licensed-container">
                    <h3>States licensed</h3>
                    <p>Add your license number(s)</p>
                    <a href="">Add license numbers</a>
                </div>
            </section>
        </div>
        </>
    )
}