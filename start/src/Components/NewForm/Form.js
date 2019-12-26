import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
      super(props);
      this.state = {
        enterText: ''
      }
  }
  addGoalHandler = event => {
    event.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      lable: this.state.enterText
    };
    // return newGoal;
    this.setState({
        enterText: ''
    })
    this.props.onAddGoal(newGoal);
  };
  textChange = (event) => {
    this.setState( {
        enterText: event.target.value
    })
  }
  render() {
    return (
      <div>
        <form className="" onSubmit={this.addGoalHandler}>
          <input type="text" value={this.state.enterText} onChange={this.textChange} />
          <button type="submit">Add Goal</button>
        </form>
      </div>
    );
  }
}

export default Form;
