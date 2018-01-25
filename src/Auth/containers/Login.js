import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogReq } from '../../actions/authReq';

import LoginForm from '../components/LoginForm';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('heyyy');
        this.props.userLogReq(this.state);
    }

    render () {
        return (
            <div className="wrapper-form">
                <h2>Log In</h2>
                <LoginForm
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

export default connect(mapStateToProps, { userLogReq })(Login)