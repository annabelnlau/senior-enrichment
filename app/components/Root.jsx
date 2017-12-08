import React, { Component } from 'react';
import StudentList from './StudentList';
import CampusList from './CampusList';
import SelectedStudent from './SelectedStudent'
import store, { fetchStudents, fetchCampuses } from '../store';
import { Route, Switch, Redirect, NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

export default class Root extends Component {

  componentDidMount() {
    const studentsThunk = fetchStudents()
    const campusesThunk = fetchCampuses()
    //const selectedStudentThunk = fetchSelectedStudent()
    store.dispatch(studentsThunk)
    store.dispatch(campusesThunk)
    //store.dispatch(selectedStudentThunk)
  }

  render() {
    //onsole.log("PROPS", ownProps)
    //const studentId = this.props.match.params.studentId
    return (
      <div>
        <main>
          <NavLink to="/"><h1>We are in the app!</h1></NavLink>
          <NavLink to="/students"><h2>Students</h2></NavLink>
          <NavLink to="/campuses"><h2>Campuses</h2></NavLink>
          <Route exact path="/students" component={StudentList} />
          <Route exact path="/campuses" component={CampusList} />
          <Route path="/students/:id" component={SelectedStudent} />
          </main>
      </div>
    )
  }
}

// //this is new
// const mapStateToProps = (storeState, ownProps) => {
//   console.log('PROPS', ownProps);
//   return {}
// }

// const mapDispatchToProps = () => {
//   return {}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Root)