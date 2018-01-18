import React from 'react';

export default const Challenges = props => {
    <div className="Challenges">
        {
            props.challenges.map( item => {
                return (
                    <ChallengeLayout key={item.id} {...item} />
                );
            })
        }
    </div>
}