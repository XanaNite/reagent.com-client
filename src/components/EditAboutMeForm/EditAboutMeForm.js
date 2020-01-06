import React from 'react'
import './EditAboutMeForm.css'

export default function EditAboutMeForm(props){
    return (
        <div className="editAboutMe-container sectionBorders">
            <form className="editAboutMe-form">
                <h3>Update Your Profile</h3>
                <div className="editForm-container">
                    <div className="newFirstName-container flexbox-between editFormSpacing">
                        <label htmlFor="newFirstName">First name</label>
                        <input type="text" name="newFirstName" id="newFirstName" defaultValue={props.agent.first_name} />
                    </div>
                    <div className="newLastName-container flexbox-between editFormSpacing">
                        <label htmlFor="newLastName">Last name</label>
                        <input type="text" name="newLastName" id="newLastName" defaultValue={props.agent.last_name} />
                    </div>
                    {/*<div className="newSuffix-container flexbox-between editFormSpacing">
                        <label htmlFor="newSuffix">Suffix</label>
                        <input type="text" name="newSuffix" id="newSuffix" />
                    </div>
                    <div className="newNickname-container flexbox-between editFormSpacing">
                        <label htmlFor="newNickname">Nickname</label>
                        <input type="text" name="newNickname" id="newNickname" />
                    </div>*/}
                    <div className="newPhone-container editFormSpacing">
                        <div className='flexbox-between'>
                            <label htmlFor="newPhone">Phone number</label>
                            <input type="text" name="newPhone" id="newPhone" defaultValue={props.agent.agent_phone} />
                        </div>
                        <div className='phoneType-container'>
                            <select name="phoneType" id="phoneType">
                                <option value="home">Home</option>
                                <option value="mobile">Mobile</option>
                                <option value="office">Office</option>
                            </select>
                        </div> 
                    </div>
                    <div className="newEmail-container flexbox-between editFormSpacing">
                        <label htmlFor="newEmail">Email address</label>
                        <input type="text" name="newEmail" id="newEmail" defaultValue={props.agent.agent_email} />
                    </div>
                    <div className="newTitle-container flexbox-between editFormSpacing">
                        <label htmlFor="newTitle">Professional title</label>
                        <input type="text" name="newTitle" id="newTitle" defaultValue={props.agent.title} />
                    </div>
                    <div className="newExperience-container flexbox-between editFormSpacing">
                        <label htmlFor="newExperience">Experience</label>
                        <input type="text" name="newExperience" id="newExperience" defaultValue={props.agent.experience} />
                    </div>
                    {/*<div className="newWorkWith-container flexbox-between editFormSpacing">
                        <label htmlFor="newWorkWith">Who do you work with?</label>
                        <select name="newWorkWith" id="newWorkWith">
                            <option value='buyer'>Buyer</option>
                            <option value='seller'>seller</option>
                        </select>
                    </div>
                    <div className="newSpecialties-container flexbox-between editFormSpacing">
                        <label htmlFor="newSpecialties">Specialties</label>
                        <input type="text" name="newSpecialties" id="newSpecialties" />
                    </div>
                    <div className="newAreas-container flexbox-between editFormSpacing">
                        <label htmlFor="newAreas">Areas served</label>
                        <input type="text" name="newAreas" id="newAreas" />
                    </div>
                    <div className="newZip-container flexbox-between editFormSpacing">
                        <label htmlFor="newZip">Zip codes served</label>
                        <input type="text" name="newZip" id="newZip" />
                    </div>
                    <div className="newWebsite-container flexbox-between editFormSpacing">
                        <label htmlFor="newWebsite">Website</label>
                        <input type="text" name="newWebsite" id="newWebsite" />
                    </div>
                    <div className="newUrl-container flexbox-between editFormSpacing">
                        <label htmlFor="newUrl">Video URL</label>
                        <input type="text" name="newUrl" id="newUrl" />
                    </div>*/}
                    <div className="newBio-container flexbox-between editFormSpacing">
                        <label htmlFor="newBio">Bio</label>
                        <textarea name="newBio" id="newBio" defaultValue={props.agent.bio} />
                    </div>
                </div>
                <div className='editForm-button'>
                    <button type="submit">Update</button>
                </div>
            </form>
        </div>
    )
}