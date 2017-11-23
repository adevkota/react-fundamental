import React from "react";
import PropTypes from 'prop-types';

class App extends React.Component{
      
  render() {

    return <Title/>
  }
}

const Title = (props) => {
  return <h1> Title: {props.text} </h1>
}

Title.propTypes = {
  text: PropTypes.string.isRequired
}

// Title.defaultProps = {
//   text: "abc"
// }

export default App;
