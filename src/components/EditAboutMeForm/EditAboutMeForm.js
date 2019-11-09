import React from 'react'
import './EditAboutMeForm.css'

export default function EditAboutMeForm(){
    return (
        <div className="editAboutMe-container sectionBorders">
            <form className="editAboutMe-form">
                <h3>Update Your Profile</h3>
                <div className="editAboutMe-container">
                    <div className="newFirstName-container">
                        <label htmlFor="newFirstName">First name</label>
                        <input type="text" name="newFirstName" id="newFirstName" />
                    </div>
                    <div className="newLastName-container">
                        <label htmlFor="newLastName">Last name</label>
                        <input type="text" name="newLastName" id="newLastName" />
                    </div>
                    <div className="newSuffix-container">
                        <label htmlFor="newSuffix">Suffix</label>
                        <input type="text" name="newSuffix" id="newSuffix" />
                    </div>
                    <div className="newNickname-container">
                        <label htmlFor="newNickname">Nickname</label>
                        <input type="text" name="newNickname" id="newNickname" />
                    </div>
                    <div className="newPhone-container">
                        <label htmlFor="newPhone">Phone number</label>
                        <input type="text" name="newPhone" id="newPhone" />
                        <select name="phoneType" id="phoneType">
                            <option value="home">Home</option>
                            <option value="mobile">Mobile</option>
                            <option value="office">Office</option>
                        </select>   
                    </div>
                    <div className="newEmail-container">
                        <label htmlFor="newEmail">Contact email address</label>
                        <input type="text" name="newEmail" id="newEmail" />
                    </div>
                    <div className="newTitle-container">
                        <label htmlFor="newTitle">Professional title</label>
                        <input type="text" name="newTitle" id="newTitle" />
                    </div>
                    <div className="newExperience-container">
                        <label htmlFor="newExperience">Years of experience</label>
                        <input type="text" name="newExperience" id="newExperience" />
                    </div>
                    <div className="newWorkWith-container">
                        <label htmlFor="newWorkWith">Who do you work with?</label>
                        <input type="text" name="newWorkWith" id="newWorkWith" />
                    </div>
                    <div className="newSpecialties-container">
                        <label htmlFor="newSpecialties">Specialties</label>
                        <input type="text" name="newSpecialties" id="newSpecialties" />
                    </div>
                    <div className="newAreas-container">
                        <label htmlFor="newAreas">Areas served</label>
                        <input type="text" name="newAreas" id="newAreas" />
                    </div>
                    <div className="newZip-container">
                        <label htmlFor="newZip">Zip codes served</label>
                        <input type="text" name="newZip" id="newZip" />
                    </div>
                    <div className="newWebsite-container">
                        <label htmlFor="newWebsite">Website</label>
                        <input type="text" name="newWebsite" id="newWebsite" />
                    </div>
                    <div className="newUrl-container">
                        <label htmlFor="newUrl">Video URL</label>
                        <input type="text" name="newUrl" id="newUrl" />
                    </div>
                    <div className="newBio-container">
                        <label htmlFor="newBio">Bio</label>
                        <input type="text" name="newBio" id="newBio" />
                    </div>
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}