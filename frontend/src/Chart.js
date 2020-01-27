import React from 'react';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lifestyles: []
    }
  }

  componentDidMount() {
    let api = process.env.REACT_APP_API_URL
    fetch(`http://${api}`)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
      });
  }

  render() {
    return (
      <p>Data: </p>
    )
  }
}

export default Chart