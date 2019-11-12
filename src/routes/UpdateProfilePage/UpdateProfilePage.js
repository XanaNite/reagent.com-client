import React from 'react'
import './UpdateProfilePage.css'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import ProfileImgSection from '../../components/ProfileImgSection/ProfileImgSection'
import ProfileAboutMeSection from '../../components/ProfileAboutMeSection/ProfileAboutMeSection'
import ProfileExpertiseSection from '../../components/ProfileExpertiseSection/ProfileExpertiseSection'

export default function UpdateProfilePage(props){
    return(
        <main className='updateProfilePage-main'>
            <DashboardHeader />
            <ProfileImgSection agentInfo={props.agentInfo[0]} />
            <div className="agentProfile-container">
                <ProfileAboutMeSection agentInfo={props.agentInfo[0]} />
                <div className='additionalInfo-container'>
                    <ProfileExpertiseSection />
                </div>
            </div>
        </main>
    )
}