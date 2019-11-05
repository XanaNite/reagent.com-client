import React from 'react'
import './ListingInfoPage.css'

export default function ListingInfoPage(){
    return(
        <section class="listingInfoPage-section">
            <div class="listingInfoPage-container">
                <div class="listingInfoPage-goBack">
                    <a href="listingList.html">Go Back</a>
                </div>
                <div class="listingInfoPage-img">
                    <a href="../listingPage.html"><img src="../images/placeholderHome.jpg" alt="House image" /></a>
                    <div class="listingImg-container">
                        <div class="listingDetails-container">
                            <div class="listingImg-background">
                                <div class="listingImg-details">
                                    <p>[[COST]]</p>
                                    <p>Listed on [[DATE]]</p>
                                    <p>[[PROPERTY TYPE]]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="listingImg-listingLink">
                        <a href="../listingPage.html">View listing on REagent.com</a>
                    </div>
                </div>
                <div class="listingInfoPage-navBar">
                    <div class="listingNavBar active">
                        LISTING DETAILS
                    </div>
                    <div class="listingNavBar notActive">
                        PHOTOS
                        <span>[[#]]</span>
                    </div>
                </div>
                <div class="listingInfoPage-main wrapper container">
                    <div class="listingInfoPage-openHouse sectioning">
                        <h2>Open houses</h2>
                        <p>No data currently available from your MLS</p>
                    </div>
                    <div class="listingInfoPage-vt sectioning">
                        <h2>Virtual tour / Video link</h2>
                        <p>No virtual tour currently available from your MLS</p>
                    </div>
                    <div class="listingInfoPage-brokerageLink sectioning">
                        <h2>Brokerage link</h2>
                        <p>No brokerage link currently available from your MLS</p>
                    </div>
                    <div class="listingInfoPage-description">
                        <h2>Description</h2>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                    </div>
                </div>
            </div>
        </section>
    )
}