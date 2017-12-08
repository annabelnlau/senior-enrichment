import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, loggingMiddleware))



//ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS'
const GET_CAMPUSES = 'GET_CAMPUSES'
//const GET_SELECTED_STUDENT = 'GET_SELECTED_STUDENT'

//ACTION CREATORS
//function that returns an object with a type and an action
export function getStudents (students) {
    const action = {type: GET_STUDENTS, students}
    return action
}

export function getCampuses (campuses) {
    const action = {type: GET_CAMPUSES, campuses}
    return action
}

// export function getSelectedStudent (student) {
//     const action = {type: GET_SELECTED_STUDENT, student}
//     return action
// }

//THUNK CREATORS

export function fetchStudents(){

    return function thunk (dispatch) {
        return axios.get('/api/students')
        .then(res => res.data)
        .then(students => {
            const action = getStudents(students)
            dispatch(action)
        })
        .catch(console.error.bind(console))
    }
}

// export function fetchSelectedStudent(id){
//     //const student = this.match.params.student
//     //console.log(student, "STUDENT!!!!")
//     return function thunk(dispatch) {
//         return axios.get(`/api/students/${id}`)
//         .then(res => res.data)
//         .then(selectedStudent => {
//             const action = getSelectedStudent(selectedStudent)
//             dispatch(action)
//         })
//         .catch(console.error.bind(console))
//     }
// }

export function fetchCampuses(){
    
    return function thunk (dispatch) {
        return axios.get('/api/campuses')
        .then(res => res.data)
        .then(campuses => {
            const action = getCampuses(campuses)
            dispatch(action)
        })
        .catch(console.error.bind(console))
    }
}
