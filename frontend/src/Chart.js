import React from 'react';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lifestyles: []
    }
  }

  componentDidMount() {
    // let host = process.env.REACT_APP_FLASK_RUN_HOST
    // let port = process.env.REACT_APP_FLASK_RUN_PORT
    // fetch("${host}:${port}").then( results => {
    //   let data = results.json().data.results;
    // })
  }

  render() {
    return (
      <p>Data: </p>
    )
  }
}

export default Chart