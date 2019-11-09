import React from 'react'
import './EditExpertiseForm.css'

export default function EditExpertiseForm(){
    return (
        <div className="updateExpertise-container sectionBorders">
            <form className="updateLang-form">
                <h4>Languages</h4>
                <div className="newLang-container">
                    <label htmlFor="newLang">Select Languages</label>
                    <input type="text" name="newLang" id="newLang" />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
)
}