import React from 'react';
import Agenda from './components/agenda';



/**
 * App component
 * @param props
 * @returns {XML}
 */
class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
            <div className="header">Mauruhren agenda</div>
              <Agenda/>


            </div>
        );
    }

}

export default App;
