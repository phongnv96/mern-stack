import React, { Component } from "react";
import GoalList from "./Components/GoalList";
import Form from "./Components/NewForm/Form";
import Users from "./user/components/Users"
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
// class App extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     courseGoal: [
//   //       { id: "1", lable: "hello baby" },
//   //       { id: "2", lable: "hello baby 1" },
//   //       { id: "3", lable: "hello baby 2" }
//   //     ]
//   //   };
//   // }
//   // addGoal = goal => {
//   //   // courseGoal.push(goal);
//   //   this.setState({
//   //     courseGoal: this.state.courseGoal.concat(goal)
//   //   })
//   //   console.log(this.state.courseGoal);
//   // };
//   // render() {
//   //   return (
//   //     <div>
//   //       <h1>A React App!</h1>
//   //       <Form onAddGoal={this.addGoal} />
//   //       <GoalList goals={this.state.courseGoal} />
//   //     </div>
//   //   );
//   // }
  
// }

const App = () => {
  return <Router>
    <Route path="/" exact>
       <Users/>
    </Route>
    <Redirect to="/" />
  </Router>
}

export default App;
