import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Table from './Table';
import $ from 'jquery';

class App extends React.Component {
  constructor() {
    super()

    this.whichCampers = this.whichCampers.bind(this);

    this.state = {
      camper_set:"recent",
      recent_url:"https://fcctop100.herokuapp.com/api/fccusers/top/recent",
      alltime_url:"https://fcctop100.herokuapp.com/api/fccusers/top/alltime",
      recent_campers : {},
      all_campers: {}
    };
  }

  whichCampers(col_id) {
    const column_id = col_id;
    this.setState({ camper_set: column_id });
  }

  componentDidMount() {
    $.ajax({
      url: this.state.recent_url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        // console.log("recent success");
        // console.log(typeof(data));
        this.setState({recent_campers: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.state.recent_url, status, err.toString());
      }.bind(this)
    });

    $.ajax({
      url: this.state.alltime_url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        // console.log("alltime success");
        // console.log(typeof(data));
        this.setState({all_campers: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.state.alltime_url, status, err.toString());
      }.bind(this)
    });
  }

    render() {
      return (
      <div>
        <Header />
          {
            (this.state.recent_campers && this.state.all_campers) ?
            // console.log(this.state.all_campers)
            <Table
              whichCampers={this.whichCampers}
              recentcampers={this.state.recent_campers}
              alltimecampers={this.state.all_campers}
              camperset={this.state.camper_set}
              />
            :null

        }

        <Footer />
      </div>
      );
    }
}

export default App;
