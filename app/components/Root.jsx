import React, { Component } from 'react';
import StudentList from './StudentList';



export default class Root extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
      <h1>We are in the app!</h1>
      <StudentList/>
      </div>
    )
  }
}