import React, { Component } from 'react'
import axios from 'axios'
import StudentList from '../components/StudentList'
import {Link} from 'react-router-dom'

export default class SelectedStudent extends Component {
    constructor() {
        super()
        this.state = {
            student: {}
        }
    }

    componentDidMount() {
        const studentId = this.props.match.params.id;

        axios.get(`/api/students/${studentId}`)
            .then(res => res.data)
            .then(student => this.setState({
                student
            }))
    }

    render() {
        const student = this.state.student
        return (
            <div>
                <h2>{student.name} </h2>
                <h3>Student Id: {student.id} </h3>
                <h3>Email: {student.email} </h3>
                <h3>GPA: {student.gpa} </h3>
                <h3>Campus: {student.campusId} </h3>
                <Link to="/students"><button>Back to Students</button></Link>
            </div>
        )
    }

}