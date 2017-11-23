import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
      
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }

  update(e) {
    this.setState({txt: e.target.value})
  }
  render() {
    let {txt, cat} = this.state;

    return (
      <div>
        <h1>{txt}</h1>
        <h1>{cat}</h1>
        <Widget update={this.update.bind(this)}></Widget>
        <Widget update={this.update.bind(this)}></Widget>
      </div>
    )
  }
}

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number
}

App.defaultProps = {
  cat: 3,
  txt: 'this is the default val'
}

const Widget = (props) => { return (

  
  <input type="text"
  onChange={props.update}/>
)
}

export default App;
