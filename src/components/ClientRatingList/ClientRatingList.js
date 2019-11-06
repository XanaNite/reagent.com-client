import React from 'react'
import './ClientRatingList.css'
import ClientRating from '../ClientRating/ClientRating'

export default class ClientRatingList extends React.Component{
    render(){
        const clientRatings = this
            .props
            .clientRatings
            .map((clientRating, i) =>
            <ClientRating {...clientRating} key={i}/> )

        return(
            <div className="clientRating-container flexbox-around">
                {clientRatings}
            </div>
        )
    }
}

ClientRatingList.defaultProps = {
    clientRatings: []
}