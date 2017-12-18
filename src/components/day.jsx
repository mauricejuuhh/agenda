import React from 'react';


/**
 * Student component
 * @param props
 * @returns {XML}
 */
class Day extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="dag_block">
              {this.props.name}

            </div>
        );
    }

}

export default Day;
