import React from "react";
import Users from "./user/pages/Users";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
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
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces/>
          </Route>
          <Route path="/places/new">
            <NewPlace />
          </Route>
          <Route path="/places/:placeId" exact>
            <UpdatePlace />
          </Route>
          <Route path="/auth" exact>
            <Auth />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
