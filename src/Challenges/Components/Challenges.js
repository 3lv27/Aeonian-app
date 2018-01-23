import React from 'react';
import './Challenges.css'

import ChallengeLayout from './ChallengeLayout';

 const Challenges = props => (
    <div className="challenges">
        {
            props.challenges.map( item => {
                return (
                    <ChallengeLayout key={item.id} {...item} />
                );
            })
        }
    </div>
 )

export default Challenges