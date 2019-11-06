import React from 'react'
import Rating from '../../components/Rating/Rating'
import './ClientRating.css'

export default function ClientRating(props){
    return(
        <div className="clientRating">
            <h5>Review by {props.client}</h5>
            <p>{props.location} in {props.year}</p>
            <ul className="flexbox-between">
                <li>Overall Rating</li>
                <li>
                    <Rating value={props.overallRating} />
                </li>
                <li>Responsiveness</li>
                <li>
                    <Rating value={props.responseRating} />
                </li>
                <li>Negotiation Skills</li>
                <li>
                    <Rating value={props.negotiateRating} />
                </li>
                <li>Professionalism</li>
                <li>
                    <Rating value={props.professionalismRating} />
                </li>
                <li>Market Expertise</li>
                <li>
                    <Rating value={props.expertiseRating} />
                </li>
            </ul>
            <p>{props.comment}</p>
        </div>
    )
}