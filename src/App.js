import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { ageUp, ageDown } from "./store/action/ageAction";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={() => this.props.onAgeUp(1)}>Age UP</button>
        <button onClick={() => this.props.onAgeDown(1)}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    age: state.age
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: (age) => dispatch(ageUp(age)),
    onAgeDown: (age) => dispatch(ageDown(age))
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
