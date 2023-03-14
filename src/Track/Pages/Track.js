import React from 'react'
// import { useEffect, useState } from 'react'

import './Track.css';
// import {collection, getDocs} from 'firebase/firestore';
// import { db_track } from '../../firebase-track';

const Track = () => {
    // const [results, setResults] = useState([]);
    // const trackingCollectionReference = collection(db_track, "users");
    // useEffect (() => {
    //     const get_tracking_details = async() => {
    //         const data = await getDocs(trackingCollectionReference);
    //         setResults( data.docs.map( (doc) => ( {...doc.data(), id: doc.id} ) ) );
    //     }
    //     get_tracking_details();
    // }, []);
    
    return (
        <div className='track-page-container'>
            <div className='track-search-container'>
                <h3>Track the Feather</h3>
                <input type='text' className='track-search-bar'/>
                <br/>
                <button class='track-search-button' type='button'>
                    Track
                </button>
            </div>
            <div className='track-results-container'>
                <h3>Results</h3>
            </div>
        </div>
    )
}

export default Track