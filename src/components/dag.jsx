import React from 'react';

/**
 * Student component
 * @param props
 * @returns {XML}
 */
class dag extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

          {this.props.day}
        );
    }

}

export default dag;
