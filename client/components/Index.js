import React from 'react';

export default class Index extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="">
                <h1>Hello World!</h1>
            </div>
        );
    }

}