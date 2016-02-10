import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {
  render() {
    return (
      <div className="welcome">
        <h1>My app</h1>
        <nav>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/test">Test</Link></li>
          <li><Link to="/notfound">Not Found</Link></li>
          <li><Link to="/asddsa">Random</Link></li>
        </nav>
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
