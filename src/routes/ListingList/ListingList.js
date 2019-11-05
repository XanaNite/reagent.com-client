import React from 'react'
import './ListingList.css'

export default function ListingList(){
    return(
        <section class="listingsListPage-section">
            <div class="listingsListPage-container container">
                <div class="listingsListPage-heading">
                    <h2>Listings</h2>
                </div>
                <div class="listingsListPage-navBar">
                    <div class="listingNavBar active">
                        FOR SALE
                    </div>
                    <div class="listingNavBar notActive">
                        FOR RENT
                    </div>
                    <div class="listingNavBar notActive">
                        SOLDS
                    </div>
                </div>
                <div class="listingsListPage-main">
                    <div class="listingsMain-noListings wrapper">
                        <img src="../images/placeholderHome.jpg" alt="No listings image" />
                        <h3>No Properties have been found yet.</h3>
                        <p>When your listings are available, we will display them here</p>
                    </div>
                    <div class="listingsMain-activeListings wrapper">
                        <a href="listingInfo.html"><img src="../images/placeholderHome.jpg" alt="House image" /></a>
                        <div class="activeListing-address">
                            <a href="listingInfo.html">[[STREET ADDRESS]]</a>
                            <p>[[CITY, STATE]]</p>
                            <p>[[ZIP CODE]]</p>
                        </div>
                        <div class="activeListing-price activeListing-details">
                            <p>Price</p>
                            <p>[[#]]</p>
                        </div>
                        <div class="activeListing-mls activeListing-details">
                            <p>MLS</p>
                            <p>[[MLS NAME]]</p>
                            <p>[[#]]</p>
                        </div>
                        <div class="listingsMain-turnPage">
                            <i class="fa fa-angle-double-left"></i>
                            <span class="turnPage-number">1</span>
                            <i class="fa fa-angle-double-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}