import React from 'react';
import './ChallengeData.css'



const ChallengeData = props => (
 
         <div className="overlay" >
            <div className="info" >
                <h2> {props.name} </h2>
                <p>{props.description}</p>
            </div>
            <div className="location">
                <p>{props.sport}</p>
                <p>{props.location}</p>
            </div>
        </div>
    )

export default ChallengeData
