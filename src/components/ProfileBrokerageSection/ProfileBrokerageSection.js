import React from 'react'
import './ProfileBrokerageSection.css'

export default function ProfileBrokerageSection(){
    return (
        <section className="brokerage-section profileMain-section">
            <div className="brokerage-container">
                <h3>Brokerage firm info</h3>
                <div className="brokerageInfo">
                    <h4>Firm name</h4>
                    <p>[[NAME]]</p>
                </div>
            </div>
        </section>
    )
}