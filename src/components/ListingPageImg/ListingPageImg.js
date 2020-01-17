import React from 'react';
import './ListingPageImg.css';

export default function ListingPageImg(){
    return(
        <section className="listing-about detailedBorder">
            <div className="presentedBy">
                <p>Presented by:</p>
                <p>[[AGENT]] with [[OFFICE]]</p>
            </div>
            <div className="listing-images">
                <div className="listing-container">
                    <img src={window.location.origin + "/images/placeholderHome.jpg"} alt="House" />
                    <div className="imagesCount">
                        <span>1/20</span>
                    </div>
                </div>
            </div>
            <div className="propertyAddress-details listingPage-details">
                <div className="address">
                    <h2 className="detailedBorder">[[COST]]</h2>
                    <div className="listing-info detailedBorder flexbox-around">
                        <p>bed</p>
                        <p>bath</p>
                        <p>sq ft</p>
                        <p>sq ft lot</p>
                    </div>
                    <p className="listingAddress detailedBorder">address</p>
                </div>
            </div>
            <div className="listingAddress-details">
                <table>
                    <tr>
                        <td>Property Type</td>
                        <td>[[INFO]]</td>
                    </tr>
                    <tr>
                        <td>Last Sold</td>
                        <td>[[INFO]]</td>
                    </tr>
                    <tr>
                        <td>Days on Market</td>
                        <td>[[INFO]]</td>
                    </tr>
                    <tr>
                        <td>Year Built</td>
                        <td>[[INFO]]</td>
                    </tr>
                    <tr>
                        <td>Price per sqft</td>
                        <td>[[INFO]]</td>
                    </tr>
                    <tr>
                        <td>Style</td>
                        <td>[[INFO]]</td>
                    </tr>
                </table>
            </div>
        </section>
    );
}
