import React from 'react';

import '../scss/app.scss';

export default class Main extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <div className="">
                {this.props.children}
            </div>
        );
    }

}