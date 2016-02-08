import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div className="welcome">
        <h1>My app</h1>
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
