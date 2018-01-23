import React, { Component } from 'react';


import SelectSport from '../Components/SelectSport';
// import NameDescription from '../Components/NameDescription';
// import CoverPic from '../Components/CoverPic';
// import SetLocation from '../Components/SetLocation';

class NewChallenge extends Component {

    state = {
        challenge: {
            sport: "",
            name: "",
            description: "",
            cover: "",
            location: "",
            timeLimit: ""
        }

    }

    addSport = (sportName) => {
        this.setState({sport: sportName})
    }

    render() {
        return(
            <SelectSport addSport={this.addSport} />
        )
    }
}

export default NewChallenge;


