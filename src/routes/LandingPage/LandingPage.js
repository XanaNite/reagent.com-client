import React from 'react'
import './LandingPage.css'
import SearchSection from '../../components/SearchSection/SearchSection';
import MainListingList from '../../components/MainListingList/MainListingList';

export default function LandingPage(){
    return (
        <>
            <SearchSection />
            <section className="listings-section flexbox-around">
                <MainListingList />
            </section>
        </>
    );
}