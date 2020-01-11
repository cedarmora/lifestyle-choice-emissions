import React from 'react';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lifestyles: []
    }
  }

  componentDidMount() {
    // fetch()
  }

  render() {
    return (
      <p>Data: </p>
    )
  }
}

export default Chart