import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from '../store'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

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
                            <NavLink to={`/students/${student.id}`}  activeClassName='active'>
                            <span>{student.name}</span>
                            
                            </NavLink>
                            </li>
                        )
                    })

                }
            </ul>
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
