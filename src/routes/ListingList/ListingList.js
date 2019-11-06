import React from 'react'
import './ListingList.css'

export default function ListingList(){
    return(
        <section className="listingsListPage-section">
            <div className="listingsListPage-container container">
                <div className="listingsListPage-heading">
                    <h2>Listings</h2>
                </div>
                <div className="listingsListPage-navBar">
                    <div className="listingNavBar active">
                        FOR SALE
                    </div>
                    <div className="listingNavBar notActive">
                        FOR RENT
                    </div>
                    <div className="listingNavBar notActive">
                        SOLDS
                    </div>
                </div>
                <div className="listingsListPage-main">
                    <div className="listingsMain-noListings wrapper">
                        <img src="../images/placeholderHome.jpg" alt="No listings image" />
                        <h3>No Properties have been found yet.</h3>
                        <p>When your listings are available, we will display them here</p>
                    </div>
                    <div className="listingsMain-activeListings wrapper">
                        <a href="listingInfo.html"><img src="../images/placeholderHome.jpg" alt="House image" /></a>
                        <div className="activeListing-address">
                            <a href="listingInfo.html">[[STREET ADDRESS]]</a>
                            <p>[[CITY, STATE]]</p>
                            <p>[[ZIP CODE]]</p>
                        </div>
                        <div className="activeListing-price activeListing-details">
                            <p>Price</p>
                            <p>[[#]]</p>
                        </div>
                        <div className="activeListing-mls activeListing-details">
                            <p>MLS</p>
                            <p>[[MLS NAME]]</p>
                            <p>[[#]]</p>
                        </div>
                        <div className="listingsMain-turnPage">
                            <i className="fa fa-angle-double-left"></i>
                            <span className="turnPage-number">1</span>
                            <i className="fa fa-angle-double-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}