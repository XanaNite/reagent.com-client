import React from 'react'
import './AccountSettings.css'

export default function AccountSettings(){
    return(
        <>
        <section>
            <div className="accountSettings-profileUser sectionBorders">
                <img src="../images/placeholderProfile.png" alt="Agent profile image" />
                <div className="accountSettings-name">
                    <h2>[[AGENT NAME]]</h2>
                </div>
            </div>
        </section>
        <section>
            <div className="accountSettings-update">
                <div className="updateEmail-container sectionBorders">
                    <form className="updateEmail-form">
                        <h3>Update Email</h3>
                        <div className="newEmail-container">
                            <label htmlFor="newEmail">Add new email</label>
                            <input type="text" name="newEmail" id="newEmail" />
                        </div>
                        <button type="submit">Update</button>
                    </form>
                </div>
                <div className="updatePassword-container sectionBorders">
                    <form className="updatePassword-form">
                        <h3>Update Password</h3>
                        <div className="oldPassword-container">
                            <label htmlFor="oldPassword">Old password</label>
                            <input type="text" name="oldPassword" id="oldPassword" />
                        </div>
                        <div className="newPassword-container">
                            <label htmlFor="newPassword">New password</label>
                            <input type="text" name="newPassword" id="newPassword" />
                        </div>
                        <div className="confirmPassword-container">
                            <label htmlFor="confirmPassword">Confirm password</label>
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