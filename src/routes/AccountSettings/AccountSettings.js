import React from 'react'
import './AccountSettings.css'

export default function AccountSettings(){
    return(
        <>
        <section>
            <div class="accountSettings-profileUser sectionBorders">
                <img src="../images/placeholderProfile.png" alt="Agent profile image" />
                <div class="accountSettings-name">
                    <h2>[[AGENT NAME]]</h2>
                </div>
            </div>
        </section>
        <section>
            <div class="accountSettings-update">
                <div class="updateEmail-container sectionBorders">
                    <form class="updateEmail-form">
                        <h3>Update Email</h3>
                        <div class="newEmail-container">
                            <label for="newEmail">Add new email</label>
                            <input type="text" name="newEmail" id="newEmail" />
                        </div>
                        <button type="submit">Update</button>
                    </form>
                </div>
                <div class="updatePassword-container sectionBorders">
                    <form class="updatePassword-form">
                        <h3>Update Password</h3>
                        <div class="oldPassword-container">
                            <label for="oldPassword">Old password</label>
                            <input type="text" name="oldPassword" id="oldPassword" />
                        </div>
                        <div class="newPassword-container">
                            <label for="newPassword">New password</label>
                            <input type="text" name="newPassword" id="newPassword" />
                        </div>
                        <div class="confirmPassword-container">
                            <label for="confirmPassword">Confirm password</label>
                            <input type="text" name="confirmPassword" id="confirmPassword" />
                        </div>
                        <button type="submit">Update</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}