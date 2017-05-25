import React from 'react';
import Camper from './Camper';

class Table extends React.Component {

  render() {
    var camperset;
    if (this.props.camperset === "recent") {
      camperset = this.props.recentcampers;
    } else if (this.props.camperset === "alltime") {
      camperset = this.props.alltimecampers;
    }
    return (

    <table className="" id="input">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Username</th>
          <th><button onClick={() => this.props.whichCampers("recent")}> Points in past 30 days</button></th>
          <th><button onClick={() => this.props.whichCampers("alltime")}>All Time Points</button></th>

        </tr>
      </thead>
      <tbody>
        {
            Object
            .keys(camperset)
            .map(key => <Camper
                          key={key}
                          index={key}
                          username={camperset[key].username}
                          image={camperset[key].img}
                          alltime={camperset[key].alltime}
                          recent={camperset[key].recent}
                           />)
          }

      </tbody>

    </table>
    )
  }
}

export default Table;
