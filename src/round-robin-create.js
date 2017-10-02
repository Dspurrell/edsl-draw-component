import React from 'react';
var robin = require('roundrobin');

class RoundRobin extends React.Component {
    
    getRounds() {
        var newTeams = this.props.team
        console.log(newTeams);
    }
    render() {
        return(
            <div>
                <button onClick={this.getRounds.bind(this)}> hey</button>
            </div>
        )
    }
}
