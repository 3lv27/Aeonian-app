import React from 'react';

const SignupForm = props => (
    <form onSubmit={props.handleSubmit}>
        <div className="form-group">
            <input
                value={props.username}
                onChange={props.handleChange}
                type="text"
                name="username"
                className="form-control"
                placeholder="Username"
            />
        </div>
        <div className="form-group">
            <input
                value={props.email}
                onChange={props.handleChange}
                type="text"
                name="email"
                className="form-control"
                placeholder="Email"
            />
        </div>
        <div className="form-group">
            <input
                value={props.password}
                onChange={props.handleChange}
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
            />
        </div>
        <div className="form-btn">
            <button>
                Signup
                    </button>
        </div>
    </form>
)

export default SignupForm