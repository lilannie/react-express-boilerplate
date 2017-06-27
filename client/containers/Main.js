import React from 'react';

import '../scss/app.scss';

export default class Main extends React.Component {
    render() {
        return (
            <div className="">
                {this.props.children}
            </div>
        );
    }

}