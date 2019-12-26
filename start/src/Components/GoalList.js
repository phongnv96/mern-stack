import React, { Component } from "react";

class GoalList extends Component {
  constructor(props, context) {
    super(props, context);
    // this.state = {
    //     goals: this.props.goals
    // }
    
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.goals.map(g => {
            return <li key={g.id}>{g.lable}</li>;
          })}
          <li>hello my friend</li>
        </ul>
      </div>
    );
  }
}

export default GoalList;
