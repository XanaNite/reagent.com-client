import React from 'react'
import './EditProfile.css'
import EditProfileHeader from '../../components/EditProfileHeader/EditProfileHeader'
import EditAboutMeForm from '../../components/EditAboutMeForm/EditAboutMeForm'

export default function EditProfile(){
    return(
        <main className='editProfile-main'>
        <EditProfileHeader />
        <section className="editProfile-update">
            <EditAboutMeForm />
        </section>
        </main>
    )
}