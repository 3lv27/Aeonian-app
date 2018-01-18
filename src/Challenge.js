import React, { Component } from 'react';
import axios from 'axios';


class Challenge extends Component {

    state = {
        challenges: [],
        loading: true
    }

    get

    render() {
        return(
            <Challenges challenges={this.state.challenges} />
        )
    }
}



export default Challenge