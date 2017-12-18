import React from 'react';
import Day from './day';
/**
 * Student component
 * @param props
 * @returns {XML}
 */
class Agenda extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="week_block">

            <Day name="Maandag" />
            <Day name="Dinsdag" />
            <Day name="Woensdag" />
            <Day name="Donderdag" />
            <Day name="Vrijdag" />
            <Day name="Zaterdag" />
            <Day name="Zondag" />

            </div>
        );
    }

}

export default Agenda;
