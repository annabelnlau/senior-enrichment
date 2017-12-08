import React, { Component } from 'react'
import axios from 'axios'
import StudentList from '../components/StudentList'

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
                <h2>Name: {student.name} </h2>
            </div>
        )
    }

}