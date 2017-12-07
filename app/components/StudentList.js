import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import store from '../store'
import { connect } from 'react-redux'

function StudentList (props) {
    
        return (
            <div>
                <h1>Students</h1>
                <ul className="student-list">
                    { console.log(props, "PROPS!!!!")
                        // console.log(props, "PROPS!!!")
                        // props.students.map(student => {
                        //     return <li key={student.id}>{student.name}</li>
                        // })
                    }
                </ul>
            </div>
        )
}

const mapStateToProps = function(state) {
    return {
        students: state.students
    }
}

export default connect(mapStateToProps)(StudentList)
