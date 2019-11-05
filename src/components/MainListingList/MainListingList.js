import React from 'react'
import './MainListingList.css'

export default function MainListingList(){
    return (
        <div className="listing-group">
            <div className="listing-wrapper">
                <a href="listingPage.html"><img src={window.location.origin + "/images/placeholderHome.jpg"} alt="House" /></a>
                <div className="listing-address">
                    <div className="listing-info flexbox-around">
                        <p>bed</p>
                        <p>bath</p>
                        <p>sq ft</p>
                        <p>sq ft lot</p>
                    </div>
                    <p className="listingAddress">address</p>
                </div>
            </div>
        </div>
    )
}