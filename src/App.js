import React from "react";
import "./App.css";
import {connect} from "react-redux"
import {fetchUsers} from "./store/actions/Actions";
import AllUsers from "./components/AllUsers";
import Calendar from "./components/Calendar";

class App extends React.Component {
  componentDidMount(){
    this.props.fetchUsers()
  }
  render() {
    return <div className="App">
      <Calendar allUsers={this.props.usersData}/>
      <AllUsers allUsers={this.props.usersData}/>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    usersData: state.mainState.usersData
  }
}
const mapDispatchToProps = {
  fetchUsers
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
