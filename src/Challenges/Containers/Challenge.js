import React, { Component } from 'react';
// import axios from 'axios';

import Challenges from '../Components/Challenges';


class Challenge extends Component {

    state = {
        challenges: [
            {
                id: 1,
                name: "madafacka",
                owner: "Donovan",
                location: "Barcelona, Spain",
                sport: "BMX",
                description: "All right, kid. But you'd better be right about this. All right. What's your plan? Uh...Threepio, hand me those binders there will you? Okay. Now, I'm going to put these on you. Okay. Han, you put these on",
                timeLimit: 30,
                cover: "http://www.fatbmx.com/uploads4/2013Q1/wk03/black444.jpg"
            },
            {
                id: 2,
                name: "BMX or DIE",
                owner: "Donovan",
                location: "Barcelona, Spain",
                sport: "BMX",
                description: "Do a barspin to manual",
                timeLimit: 30,
                cover: "http://s3-eu-west-1.amazonaws.com/digbmx/video/Tbb-Barcelona-bmx-street.jpg"
            },
            {
                id: 3,
                name: "Skate or DIE",
                owner: "Donovan",
                location: "Barcelona, Spain",
                sport: "SKATE",
                description: "manual to 50-50 and flip",
                timeLimit: 30,
                cover: "http://www.todobarcelona.org/wp-content/uploads/skate-universitat.jpg"
            },
            {
                id: 4,
                name: "Parkour or DIE",
                owner: "Donovan",
                location: "Barcelona, Spain",
                sport: "Parkour",
                description: "jump over the trash and break a leg",
                timeLimit: 30,
                cover: "http://www.todobarcelona.org/wp-content/uploads/skate-universitat.jpg"
            },
            {
                id: 5,
                name: "Parkour or DIE",
                owner: "Donovan",
                location: "Barcelona, Spain",
                sport: "Parkour",
                description: "jump over the trash and break a leg",
                timeLimit: 30,
                cover: "http://www.todobarcelona.org/wp-content/uploads/skate-universitat.jpg"
            }
        ],
        loading: true
    }


    render() {
        return(
            <Challenges challenges={this.state.challenges} />
        )
    }
}



export default Challenge