import React from 'react';
import './ChallengeLayout.css'
import ChallengeData from './ChallengeData'


const ChallengeLayout = props => {
    const cardCover = {
        backgroundImage: `url(${props.cover})`,
        backgroundSize: 'cover'
    };

    return (
        <div className="card" style={cardCover}>
            <ChallengeData {...props}/>
        </div>   
    );
}

export default ChallengeLayout
