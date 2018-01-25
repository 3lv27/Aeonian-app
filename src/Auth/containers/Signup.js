import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignReq } from '../../actions/authReq';

import SignupForm from '../components/SignupForm';

class Signup extends Component {

    state = {
        username: '',
        email: '',
        password: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log('heyyy');
        this.props.userSignReq(this.state);
    }

    render () {
        
        return (
            <div className="wrapper-form">
            <h2>Sign UP</h2>
            <SignupForm  
            handleChange={this.onChange}
            handleSubmit={this.onSubmit}
            />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.user.user }

}

export default connect(mapStateToProps, { userSignReq })(Signup)