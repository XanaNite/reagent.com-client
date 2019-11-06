import React from 'react'
import ClientRecommend from '../ClientRecommend/ClientRecommend'
import './ClientRecommendList.css'

export default class ClientRecommendList extends React.Component{
    render(){
        const clientRecommends = this
            .props
            .recommendation
            .map((clientRecommend, i) =>
            <ClientRecommend {...clientRecommend} key={i}/> )

        return(
            <div className="clientRecommend-container flexbox-around">
                {clientRecommends}
            </div>
        )
    }
}

ClientRecommendList.defaultProps = {
    clientRecommends: [],
}