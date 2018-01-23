import React from 'react';
import PropTypes from 'prop-types';

const SelectSport = props => {
    const Sports = ['Skateboarding', 'BMX', 'Parkour', 'SkateRolling', 'StreetWorkout']


    return(
        <ul>
        {
            Sports.map( sport => {
             return ( 
             <li className= "sports" id={sport} key= {sport}> 
                <button onClick={props.addSport.bind(null, sport)}> {sport} </button> 
             </li>
             )
            })
        }
        </ul>
    )
}

export default SelectSport;

SelectSport.proptypes = {
    onClick: PropTypes.func.isRequired,
}