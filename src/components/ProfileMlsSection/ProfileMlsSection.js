import React from 'react'
import './ProfileMlsSection.css'

export default function ProfileMlsSection(){
    return (
        <section className="mlsInfo-section profileMain-section">
            <div className="mlsInfo-container">
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
    )
}