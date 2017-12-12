import React, { Component } from 'react';
import StudentList from './StudentList';
import CampusList from './CampusList';
import SelectedStudent from './SelectedStudent'
import SelectedCampus from './SelectedCampus'
import store, { fetchStudents, fetchCampuses } from '../store';
import { Route, Switch, Redirect, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import NewStudentEntry from './NewStudentEntry';

export default class Root extends Component {

  componentDidMount() {
    const studentsThunk = fetchStudents()
    const campusesThunk = fetchCampuses()
    store.dispatch(studentsThunk)
    store.dispatch(campusesThunk)
  }

  render() {
    //onsole.log("PROPS", ownProps)
    //const studentId = this.props.match.params.studentId
    return (
      <div>
        <main>
          <Link to="/"><h1>Where in the <strike>world</strike> universe do you want to study?</h1></Link>
          <Link to="/students"><h2>Students</h2></Link>
          <Link to="/campuses"><h2>Campuses</h2></Link>
          <Route exact path="/students" component={StudentList} />
          <Route exact path="/campuses" component={CampusList} />
          <Route path="/students/:id" component={SelectedStudent} />
          <Route path="/campuses/:id" component={SelectedCampus} />
          <Route path="/" component={NewStudentEntry}/>
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