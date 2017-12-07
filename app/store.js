import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, loggingMiddleware))

//INITIAL STATE
const initialState = {
    students: [],
    campuses: []
    //will need to add more to this later 
}

//ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS'
const GET_CAMPUSES = 'GET_CAMPUSES'

//ACTION CREATORS
export function getStudents (students) {
    const action = {type: GET_STUDENTS, students}
    return action
}

export function getCampuses (campuses) {
    const action = {type: GET_CAMPUSES, campuses}
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
    }
}

//REDUCER

function reducer (state = initialState, action){
    switch(action.type){

        case GET_STUDENTS:
        return Object.assign({}, state, {
            students: action.students
        })

        case GET_CAMPUSES:
        return Object.assign({}, state, {
            campuses: action.campuses
        })

        default:
        return state
    }
}
