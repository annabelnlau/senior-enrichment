/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import store, {fetchStudents, fetchCampuses, getSelectedStudent} from '../store';


//INITIAL STATE
const initialState = {
  students: [],
  campuses: []
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

  //   case "GET_SELECTED_STUDENT":
  //   return Object.assign({}, state, {
  //       selectedStudent: action.student
  //   })
    default: return state
  }
};

export default rootReducer
