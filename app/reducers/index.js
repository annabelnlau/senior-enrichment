/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import store, {fetchStudents, fetchCampuses, updateStudent, writeStudent, postStudent} from '../store';


//INITIAL STATE
const initialState = {
  students: [],
  campuses: [],
  newStudentEntry: {}
  //will need to add more to this later 
}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    case "GET_STUDENTS":
    return Object.assign({}, state, {
        students: action.students
    })

    case "GET_CAMPUSES":
    return Object.assign({}, state, {
        campuses: action.campuses
    })

    case "WRITE_STUDENT":
    return Object.assign({}, state, {
        newStudentEntry: action.newStudent
    })
    case "UPDATE_STUDENT":
    return initialState.map(student => {
      if (+student.id === +action.student.id) return action.student
      return student
    })
    default: return state
  }
};

export default rootReducer
