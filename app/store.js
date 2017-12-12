import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, loggingMiddleware))



//ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS'
const GET_CAMPUSES = 'GET_CAMPUSES'
const WRITE_STUDENT = 'WRITE_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'

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

export function writeStudent(newStudent){
    const action = {type: WRITE_STUDENT, newStudent}
    return action
}

export function updateStudentAction(updatedStudent){
    const action = {type: UPDATE_STUDENT, updatedStudent}
    return action
}

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

export function postStudent(newStudent){
    return function thunk (dispatch){
        return axios.post('api/students', newStudent)
        .then(res => res.data)
        .then(newStudent => {
            const action = writeStudent(newStudent)
            dispatch(action)
        })
        .catch(console.error.bind(console))
    }
}

export function updateStudent(id, studentUpdateData){
    return function (dispatch) {
        axios.put(`/api/students/${id}`, studentUpdateData)
            .then(res => res.data)
            .then(updatedStudent => dispatch(updateStudentAction(updatedStudent)))
            .catch(console.error.bind(console))
    }
}

