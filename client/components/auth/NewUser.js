import React from 'react';

export default class NewUser extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <h1>New User</h1>
        );
    }
}