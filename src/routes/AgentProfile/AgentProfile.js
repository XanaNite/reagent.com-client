import React from 'react'
import './AgentProfile.css'

export default function AgentProfile(){
    return(
        <>
        <section class="agentProfile-section">
            <div class="profileBanner">
                <img src="images/placeholderProfile.png" alt="Profile" />
                <div class="profileBanner-name">
                    <h2>Name, Title &#8226; Location, ST</h2>
                    <div class="overallRating">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
            </div>
        </section>
        <section class="agentInfo">
            <div class="agentInfo-about">
                <h3>About [[NAME]] with [[OFFICE]]</h3>
                <div class="about-container">
                    <p id="agentBio">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                    <div class="aboutDetails-container">
                        <p>Experience</p>
                        <p>Specializations</p>
                        <p>Areas Served</p>
                        <p>Brokerage</p>
                        <p>Slogan</p>
                        <p>Designations & Certifications</p>
                        <p>Price Range (last 24 months)</p>
                        <p>Recommendations count</p>
                    </div>
                </div>
            </div>
            <div class="agentInfo-listings">
                <h4>Listing Activity</h4>
                <div class="listing-group-container flexbox-around">
                    <div class="listing-group">
                        <div class="listing-container">
                            <a href="listingPage.html"><img src="images/placeholderHome.jpg" alt="House" /></a>
                            <div class="listing-details">
                                <p>Location</p>
                                <p>Cost</p>
                                <p>bedroom/bathroom</p>
                            </div>
                        </div>
                    </div>
                    <div class="listing-group">
                        <div class="listing-container">
                            <a href="listingPage.html"><img src="images/placeholderHome.jpg" alt="House" /></a>
                            <div class="listing-details">
                                <p>Location</p>
                                <p>Cost</p>
                                <p>bedroom/bathroom</p>
                            </div>
                        </div>
                    </div>
                    <div class="listing-group">
                        <div class="listing-container">
                            <a href="listingPage.html"><img src="images/placeholderHome.jpg" alt="House" /></a>
                            <div class="listing-details">
                                <p>Location</p>
                                <p>Cost</p>
                                <p>bedroom/bathroom</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="agentInfo-ratings">
                <h4>Ratings and Reviews</h4>
                <div class="overallRating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
                <div class="clientRating-container flexbox-around">
                    <div class="clientRating">
                        <h5>Review by [[CLIENT]]</h5>
                        <p>[[LOCATION]] in [[year]]</p>
                        <ul class="flexbox-between">
                            <li>Overall Rating</li>
                            <li>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>Responsiveness</li>
                            <li>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>Negotiation Skills</li>
                            <li>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>Professionalism</li>
                            <li>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>Market Expertise</li>
                            <li>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                        </ul>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    </div>
                    <div class="clientRating">
                        <h5>Review by [[CLIENT]]</h5>
                        <p>[[LOCATION]] in [[year]]</p>
                        <ul class="flexbox-between">
                            <li>Overall Rating</li>
                            <li>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>Responsiveness</li>
                            <li>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>Negotiation Skills</li>
                            <li>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>Professionalism</li>
                            <li>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>Market Expertise</li>
                            <li>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                        </ul>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    </div>
                    <div class="clientRating">
                        <h5>Review by [[CLIENT]]</h5>
                        <p>[[LOCATION]] in [[year]]</p>
                        <ul class="flexbox-between">
                            <li>Overall Rating</li>
                            <li>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>Responsiveness</li>
                            <li>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>Negotiation Skills</li>
                            <li>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>Professionalism</li>
                            <li>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>Market Expertise</li>
                            <li>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                        </ul>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    </div>
                </div>
            </div>
            <div class="agentInfo-recommendations">
                <h4>Recommendations</h4>
                <div class="clientRecommend-container flexbox-around">
                    <div class="clientRecommend">
                        <h5>[[CLIENT]]</h5>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    </div>
                    <div class="clientRecommend">
                        <h5>[[CLIENT]]</h5>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    </div>
                    <div class="clientRecommend">
                        <h5>[[CLIENT]]</h5>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}