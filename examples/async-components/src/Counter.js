import React from 'react'
import { hot } from 'react-hot-loader'

class Counter extends React.Component {
  state = { count: 0 }

  componentDidMount() {
    //
    this.interval = setInterval(
      () => this.setState(prevState => ({ count: prevState.count + 1 })),
      200,
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        1#{this.state.count}
        <span>5</span>
      </div>
    )
  }
}

export default Counter
