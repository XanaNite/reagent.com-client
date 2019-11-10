import React from 'react'
import './ListingPage.css'
import ListingPageImg from '../../components/ListingPageImg/ListingPageImg'

export default function ListingPage(){
    return(
        <main className='ListingPage-main'>
            <ListingPageImg />
            <div className="listingPage-details">
                <section className="listing-openHouses detailedBorder">
                    <h3>Open Houses</h3>
                    <p>Contact agent for a private showing.</p>
                </section>
                <section className="listing-propertyDetails detailedBorder">
                    <h3>Property Details</h3>
                    <p className="propertyOverview">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                    <div className="propertyFeatures">
                        <div className="listing-bedrooms detailedBorder">
                            <h4>Bedrooms</h4>
                            <ul>
                                <li>Bedrooms: [[#]]</li>
                            </ul>
                        </div>
                        <div className="listing-bathrooms detailedBorder">
                            <h4>Bathrooms</h4>
                            <ul>
                                <li>Total Bathrooms: [[#]]</li>
                                <li>Full Bathrooms: [[#]]</li>
                                <li>1/2 Bathrooms: [[#]]</li>
                            </ul>
                        </div>
                        <div className="listing-appliances detailedBorder">
                            <h4>Appliances</h4>
                            <ul>
                                <li>Laundry Facilities: [[INFO]]</li>
                            </ul>
                        </div>
                        <div className="listing-kitchenDining detailedBorder">
                            <h4>Kitchen and Dining</h4>
                            <ul>
                                <li>Disposal</li>
                                <li>Refrigerator</li>
                                <li>Dishwasher</li>
                                <li>Range/Oven Elec</li>
                                <li>Cook Top Elec</li>
                            </ul>
                        </div>
                        <div className="listing-heatingCooling detailedBorder">
                            <h4>Heating and Cooling</h4>
                            <ul>
                                <li>Cooling Features: [[INFO]]</li>
                                <li>Heating Features: [[INFO]]</li>
                                <li>Number of Fireplaces: [[#]]</li>
                            </ul>
                        </div>
                        <div className="listing-exteriorLot detailedBorder">
                            <h4>Exterior and Lot Features</h4>
                            <ul>
                                <li>Fencing: [[INFO]]</li>
                                <li>Lot Size Square Feet: [[#]]</li>
                            </ul>
                        </div>
                        <div className="listing-land detailedBorder">
                            <h4>Land Info</h4>
                            <ul>
                                <li>Landscaping: [[INFO]]</li>
                                <li>Lot Size Acres: [[#]]</li>
                            </ul>
                        </div>
                        <div className="listing-garageParking detailedBorder">
                            <h4>Garage and Parking</h4>
                            <ul>
                                <li>Parking Features: [[INFO]]</li>
                                <li>Spaces: [[#]]</li>
                            </ul>
                        </div>
                        <div className="listing-hoa detailedBorder">
                            <h4>Homeowners Association</h4>
                            <ul>
                                <li>Association: [[INFO]]</li>
                                <li>Association Fee Includes: [[INFO]]</li>
                                <li>Calculated Total Monthly Association Fees: [[#]]</li>
                            </ul>
                        </div>
                        <div className="listing-schoolInfo detailedBorder">
                            <h4>School Information</h4>
                            <ul>
                                <li>Elementary School: [[INFO]]</li>
                                <li>Elementary School District: [[INFO]]</li>
                                <li>High School: [[INFO]]</li>
                                <li>High School District: [[INFO]]</li>
                                <li>Middle School: [[INFO]]</li>
                                <li>Middle School District: [[INFO]]</li>
                            </ul>
                        </div>
                        <div className="listing-other detailedBorder">
                            <h4>Other Property Info</h4>
                            <ul>
                                <li>Annual Tax Amount: [[#]]</li>
                                <li>Source Listing Status: [[INFO]]</li>
                                <li>County: [[INFO]]</li>
                                <li>Cross Street: [[INFO]]</li>
                                <li>Directions: [[INFO]]</li>
                                <li>Tax Year: [[#]]</li>
                                <li>Source Property Type: [[INFO]]</li>
                                <li>Source Neighborhood: [[INFO]]</li>
                                <li>Parcel Number: [[#]]</li>
                                <li>Postal Code Plus 4: [[#]]</li>
                                <li>Subdivision: [[INFO]]</li>
                                <li>Source System Name: C2C</li>
                            </ul>
                        </div>
                        <div className="listing-buildingConstruction detailedBorder">
                            <h4>Building and Construction</h4>
                            <ul>
                                <li>Square Feet Living: [[#]]</li>
                                <li>Year Built: [[#]]</li>
                                <li>Building Exterior Type: [[INFO]]</li>
                                <li>Building Name: [[INFO]]</li>
                                <li>Construction Materials: [[INFO]]</li>
                                <li>Flooring: [[INFO]]</li>
                                <li>Property Age: [[#]]</li>
                                <li>Roof: [[INFO]]</li>
                                <li>Levels or Stories: [[#]]</li>
                                <li>Structure Type: [[INFO]]</li>
                                <li>House Style: [[INFO]]</li>
                                <li>Architectural Style: [[INFO]]</li>
                            </ul>
                        </div>
                        <div className="listing-utilities">
                            <h4>Utilities</h4>
                            <ul>
                                <li>Sewer: [[INFO]]</li>
                                <li>Utilities: [[INFO]]</li>
                                <li>Water Source: [[INFO]]</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="listing-paymentCalculator detailedBorder">
                    <h3>Payment Calculator</h3>
                    <div className="paymentCalculator-img">
                        <img src={window.location.origin + "/images/paymentCalculator.jpg"} alt="payment calculator" />
                    </div>
                </section>
                <section className="listing-propertyHistory detailedBorder">
                    <h3>Property History</h3>
                    <div className="listing-price">
                        <h4>Property Price</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Event</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>[[#]]</td>
                                    <td>[[INFO]]</td>
                                    <td>[[#]]</td>
                                </tr>
                                <tr>
                                    <td>[[#]]</td>
                                    <td>[[INFO]]</td>
                                    <td>[[#]]</td>
                                </tr>
                                <tr>
                                    <td>[[#]]</td>
                                    <td>[[INFO]]</td>
                                    <td>[[#]]</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="listing-tax">
                        <h4>Property Tax</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>Taxes</th>
                                    <th>Total Assessment</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>[[#]]</td>
                                    <td>[[#]]</td>
                                    <td>[[#]]</td>        
                                </tr>
                                <tr>
                                    <td>[[#]]</td>
                                    <td>[[#]]</td>
                                    <td>[[#]]</td>        
                                </tr>
                                <tr>
                                    <td>[[#]]</td>
                                    <td>[[#]]</td>
                                    <td>[[#]]</td>        
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className="listing-nearbySchools detailedBorder">
                    <h3>Nearby Schools</h3>
                    <div className="listing-schoolRatings">
                        <table>
                            <thead>
                                <tr>
                                    <th>Rating</th>
                                    <th>School Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>[[#]]</td>
                                    <td>[[INFO]]</td>
                                </tr>
                                <tr>
                                    <td>[[#]]</td>
                                    <td>[[INFO]]</td>
                                </tr>
                                <tr>
                                    <td>[[#]]</td>
                                    <td>[[INFO]]</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className="listing-neighborhood detailedBorder">
                    <h3>Neighborhood</h3>
                    <p>[[ADDRESS]] is located in [[NEIGHBORHOOD]] in the city of [[LOCATION]]</p>
                    <p>Checkout other home values on [[STREET]]</p>
                    <div className="neighborhood-details">
                        <ul className="neighborhoodMedian flexbox-between">
                            <li className="dottedBorder">
                                [[#]]
                                <span>Median Listing Price</span>
                            </li>
                            <li className="dottedBorder-tablet">
                                [[#]]
                                <span>Median Sales Price</span>
                            </li>
                            <li className="dottedBorder">
                                [[#]]
                                <span>Median Days on Market</span>
                            </li>
                            <li>
                                [[#]]
                                <span>Price Per Sq Ft</span>
                            </li>
                        </ul>
                        <div className="nearbyNeighborhoods">
                            <h4>Nearby Neighborhoods in [[LOCATION]]</h4>
                            <ul className="flexbox-between">
                                <li className="dottedBorder">
                                    [[NEIGHBORHOOD]]
                                    <span>Median Listing: [[#]]</span>
                                </li>
                                <li className="dottedBorder-tablet">
                                    [[NEIGHBORHOOD]]
                                    <span>Median Listing: [[#]]</span>
                                </li>
                                <li className="dottedBorder">
                                    [[NEIGHBORHOOD]]
                                    <span>Median Listing: [[#]]</span>
                                </li>
                                <li>
                                    [[NEIGHBORHOOD]]
                                    <span>Median Listing: [[#]]</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="listing-agentInfo">
                    <div className="agent-info">
                        <div className="agent detailedBorder">
                            <p>Presented by:</p>
                            <p><a href="agentProfile.html">[[AGENT]]</a></p>
                        </div>
                        <div className="brokerage detailedBorder">
                            <p>Brokered by:</p>
                            <p>[[OFFICE]]</p>
                            <p>[[#]]</p>
                        </div>
                    </div>
                    <div className="listingInfo">
                        <ul className="brokerLocation detailedBorder flexbox-between">
                            <li>Broker Location:</li>
                            <li>[[LOCATION]]</li>
                        </ul>
                        <ul className="dataSource detailedBorder flexbox-between">
                            <li>Data Source:</li>
                            <li>[[SOURCE]]</li>
                        </ul>
                        <ul className="propertyId detailedBorder flexbox-between">
                            <li>Source's Property ID:</li>
                            <li>[[#]]</li>
                        </ul>
                        <ul className="copyright flexbox-between">
                            <li>Data Source Copyright:</li>
                            <li>[[INFO]]</li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    )
}