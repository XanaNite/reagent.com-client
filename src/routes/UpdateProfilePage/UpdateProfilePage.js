import React from 'react'
import './UpdateProfilePage.css'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import ProfileImgSection from '../../components/ProfileImgSection/ProfileImgSection'
import ProfileAboutMeSection from '../../components/ProfileAboutMeSection/ProfileAboutMeSection'

export default function UpdateProfilePage(props){
    return(
        <main className='updateProfilePage-main'>
            <DashboardHeader />
            <ProfileImgSection agentInfo={props.agentInfo} />
            <div className="agentProfile-container">
                <ProfileAboutMeSection agentInfo={props.agentInfo} />
            </div>
        </main>
    )
}