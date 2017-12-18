import React from 'react';
/**
 * Student component
 * @param props
 * @returns {XML}
 */
class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">

<span style="font-size: 35px;">Mauruhren agenda</span>
            </div>
        );
    }

}

export default Header;
