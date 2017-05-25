import React from 'react';

class Camper extends React.Component {

render() {
  const { index, username, image, alltime, recent } = this.props;
    return (
    <tr>
      <td>{Number(index)+1}</td>
      <td><img className="avatar" alt="" src={image} />  <a href={"https://www.freecodecamp.com/"+username}>{username}</a></td>
      <td>{recent}</td>
      <td>{alltime}</td>

    </tr>
    )
  }
}
export default Camper;
