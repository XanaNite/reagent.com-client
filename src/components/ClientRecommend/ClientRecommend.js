import React from 'react'
import './ClientRecommend.css'

export default function ClientRecommend(props){
    return(
        <div className="clientRecommend">
            <h5>{props.client}</h5>
            <p>{props.comment}</p>
        </div>
    )
}