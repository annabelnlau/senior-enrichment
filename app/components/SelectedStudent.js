import React, { Component } from 'react'
import axios from 'axios'
import StudentList from '../components/StudentList'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import store, { updateStudent } from '../store';

export class SelectedStudent extends Component {
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

    handleChange(event){
        this.setState({student: event.target.value})
    }

    handleSubmit(event, id){
        event.preventDefault()
        this.props.updateStudentFromComponent(id, {student: this.state.student})
    }

    render() {
        const student = this.state.student
        if(!student) return <div>The student with this ID cannot be found.</div>
        return (
            <div>
                <h2>{student.name} </h2>
                <h3>Student Id: {student.id} </h3>
                <h3>Email: {student.email} </h3>
                <h3>GPA: {student.gpa} </h3>
                <h3>Campus: {student.campusId} </h3>
                <Link to="/students"><button>Back to Students</button></Link>
                <h4>Update this Entry</h4>
                    <div>
                         <form onSubmit={(event) => this.handleSubmit(event, id)}>
                            <input name="something" value={this.state.student} onChange={this.handleChange} />
                            <button type="submit">Save Changes</button>
                        </form>
                     </div>
            </div>
        )
    }

}

const mapState = (storeState, ownProps) => {
    return {
        student: storeState,
        id: ownProps.match.params.id
    }
}

const mapDispatch = dispatch => {
    return {
        updateStudentFromComponent: function (id, updateStudentObj) {
            dispatch(updateStudentAction(id, updateStudentObj))
        }
    }
}

export default connect(mapState, mapDispatch)(SelectedStudent)