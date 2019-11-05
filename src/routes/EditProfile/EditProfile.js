import React from 'react'
import './EditProfile.css'

export default function EditProfile(){
    return(
        <>
        <section>
            <div class="editProfile-images sectionBorders">
                <div class="uploadImages-container">
                </div>
            </div>
        </section>
        <section class="editProfile-update">
            <div class="editAboutMe-container sectionBorders">
                <form class="editAboutMe-form">
                    <h3>Update Your Profile</h3>
                    <div class="editAboutMe-container">
                        <div class="newFirstName-container">
                            <label for="newFirstName">First name</label>
                            <input type="text" name="newFirstName" id="newFirstName" />
                        </div>
                        <div class="newLastName-container">
                            <label for="newLastName">Last name</label>
                            <input type="text" name="newLastName" id="newLastName" />
                        </div>
                        <div class="newSuffix-container">
                            <label for="newSuffix">Suffix</label>
                            <input type="text" name="newSuffix" id="newSuffix" />
                        </div>
                        <div class="newNickname-container">
                            <label for="newNickname">Nickname</label>
                            <input type="text" name="newNickname" id="newNickname" />
                        </div>
                        <div class="newPhone-container">
                            <label for="newPhone">Phone number</label>
                            <input type="text" name="newPhone" id="newPhone" />
                            <select name="phoneType" id="phoneType">
                                <option value="home">Home</option>
                                <option value="mobile">Mobile</option>
                                <option value="office">Office</option>
                            </select>   
                        </div>
                        <div class="newEmail-container">
                            <label for="newEmail">Contact email address</label>
                            <input type="text" name="newEmail" id="newEmail" />
                        </div>
                        <div class="newTitle-container">
                            <label for="newTitle">Professional title</label>
                            <input type="text" name="newTitle" id="newTitle" />
                        </div>
                        <div class="newExperience-container">
                            <label for="newExperience">Years of experience</label>
                            <input type="text" name="newExperience" id="newExperience" />
                        </div>
                        <div class="newWorkWith-container">
                            <label for="newWorkWith">Who do you work with?</label>
                            <input type="text" name="newWorkWith" id="newWorkWith" />
                        </div>
                        <div class="newSpecialties-container">
                            <label for="newSpecialties">Specialties</label>
                            <input type="text" name="newSpecialties" id="newSpecialties" />
                        </div>
                        <div class="newAreas-container">
                            <label for="newAreas">Areas served</label>
                            <input type="text" name="newAreas" id="newAreas" />
                        </div>
                        <div class="newZip-container">
                            <label for="newZip">Zip codes served</label>
                            <input type="text" name="newZip" id="newZip" />
                        </div>
                        <div class="newWebsite-container">
                            <label for="newWebsite">Website</label>
                            <input type="text" name="newWebsite" id="newWebsite" />
                        </div>
                        <div class="newUrl-container">
                            <label for="newUrl">Video URL</label>
                            <input type="text" name="newUrl" id="newUrl" />
                        </div>
                        <div class="newBio-container">
                            <label for="newBio">Bio</label>
                            <input type="text" name="newBio" id="newBio" />
                        </div>
                    </div>
                    <button type="submit">Update</button>
                </form>
            </div>
            <div class="updateExpertise-container sectionBorders">
                <form class="updateLang-form">
                    <h4>Languages</h4>
                    <div class="newLang-container">
                        <label for="newLang">Select Languages</label>
                        <input type="text" name="newLang" id="newLang" />
                    </div>
                    <button type="submit">Update</button>
                </form>
            </div>
        </section>
        </>
    )
}