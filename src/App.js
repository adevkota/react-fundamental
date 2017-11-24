import React from "react";
// import ReactDom from "react-dom";
// import PropTypes from 'prop-types';

class App extends React.Component{
  constructor() {
    super();
    this.state = {a: ''}
  }

  update() {
    this.setState({
      // a: ReactDom.findDOMNode(this.a).value,
      a: this.a.refs.input.value,
      b: this.refs.b.value
    })
  }
  render() {
    return (
      <div>
        <Input 
          ref={component => this.a = component}
          update={this.update.bind(this)}
          />{this.state.a}
        <hr/>
        <input 
          type="text"
          ref="b"
          onChange={this.update.bind(this)}
          />{this.state.b}
      </div>
    )
  }
}

class Input extends React.Component {
  render() {
    return (
      <div>
        <input ref="input" type="text" onChange={this.props.update}/>
      </div>
    )
  }
}

export default App;
