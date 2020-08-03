import React from "react";
import "./App.css";
import { connect } from "react-redux";
import {
  fetchUsers,
  handleMouseEnter,
  handleMouseLeave,
} from "./store/actions/Actions";
import AllUsers from "./components/AllUsers";
import Calendar from "./components/Calendar";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <div className="App">
        <Calendar
          isVisible={this.props.isVisible}
          listOfBirthdayUsers={this.props.birthdayUsers}
          handleMouseEnter={this.props.handleMouseEnter}
          handleMouseLeave={this.props.handleMouseLeave}
        />
        <AllUsers allUsers={this.props.usersData} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersData: state.mainState.usersData,
    birthdayUsers: state.mainState.listOfBDUsers,
    isVisible: state.mainState.isVisible,
  };
};
const mapDispatchToProps = {
  fetchUsers,
  handleMouseEnter,
  handleMouseLeave,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
