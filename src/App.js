import React from "react";
import ReactDOM from "react-dom";
// import PropTypes from 'prop-types';

class App extends React.Component{
  constructor() {
    super();
    this.state = {increasing: false};
    this.update = this.update.bind(this);
  }

  update() {
    ReactDOM.render(
      <App val={this.props.val+1} />,
      document.getElementById('root')
    )
  }

  
  // componentWillMount() {
  //   console.log("componentWillMount");
  //   this.setState({m:2})
  // }
  componentWillReceiveProps(nextProps) {
    this.setState({increasing: nextProps.val > this.props.val})
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps: ${prevProps.val}`)
  }
  
  render() {
    console.log(this.state.increasing)
    return <button onClick={this.update}>
      {this.props.val}</button>
  }
  
  // componentDidMount() {
  //   console.log("componentDidMount");
  //   console.log(ReactDOM.findDOMNode(this));
  //   this.inc = setInterval(this.update, 500);
  // }

  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  //   clearInterval(this.inc);
  // }
}

// class Wrapper extends React.Component {
//   mount() {
//     ReactDOM.render(<App />,
//       document.getElementById('a'))
//   }

//   unMount() {
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unMount.bind(this)}>UnMount</button>
//         <div id="a"></div>
//       </div>
//     )
//   }
// }

App.defaultProps = {
  val: 0
}
export default App;
