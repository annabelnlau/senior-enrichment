import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from '../store'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function StudentList(props) {
    console.log("props inside", props.students)

    return (
        <div>
            <h1>Students</h1>
    
            <ul>
                {props.students &&
                    //"we found the students"
                    // console.log(props, "PROPS!!!")
                    props.students.map(student => {
                        return (
                            <li key={student.id}>
                            <Link to={`/students/${student.id}`} >
                            <span>{student.name}</span>
                            
                            </Link>
                            </li>
                        )
                    })
                    
                }
            </ul>
            {<Link to="/add-student/"><button>Add a new student</button></Link>}
        </div>
    )
}

const mapStateToProps = function (storeState, ownProps) {
    //console.log('OWNPROPS IN MAPSTATE!!!!', ownProps)
    return {
        students: storeState.students
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        fetchStudentsInComponent: function(){
            const studentsThunk = fetchStudents()
            dispatch(studentsThunk)
        }
    }
}
//for letting a lower component know something specifically like the number 5 or something

const StudentListContainer = connect(mapStateToProps, mapDispatchToProps)(StudentList)
export default StudentListContainer
