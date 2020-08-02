import React from "react";
import "./App.css";
import { connect } from "react-redux";
import {
  fetchUsers,
  getListOfBirthdayUsers,
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
          allUsers={this.props.usersData}
          isVisible={this.props.isVisible}
          listOfBirthdayUsers={this.props.birthdayUsers}
          getListOfBirthdayUsers={this.props.getListOfBirthdayUsers}
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
  getListOfBirthdayUsers,
  handleMouseEnter,
  handleMouseLeave,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
