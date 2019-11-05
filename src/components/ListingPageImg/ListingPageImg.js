import React from 'react'

export default function ListingPageImg(){
    return(
        <section class="listing-about detailedBorder">
            <div class="presentedBy">
                <p>Presented by:</p>
                <p>[[AGENT]] with [[OFFICE]]</p>
            </div>
            <div class="listing-images">
                <div class="listing-container">
                    <img src={window.location.origin + "/images/placeholderHome.jpg"} alt="House" />
                    <div class="imagesCount">
                        <span>1/20</span>
                    </div>
                </div>
            </div>
            <div class="propertyAddress-details listingPage-details">
                <div class="address">
                    <h2 class="detailedBorder">[[COST]]</h2>
                    <div class="listing-info detailedBorder flexbox-around">
                        <p>bed</p>
                        <p>bath</p>
                        <p>sq ft</p>
                        <p>sq ft lot</p>
                    </div>
                    <p class="listingAddress detailedBorder">address</p>
                </div>
            </div>
            <div class="listingAddress-details">
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
    )
}
