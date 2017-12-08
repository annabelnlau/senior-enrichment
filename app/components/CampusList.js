import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import store from '../store'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

function CampusList (props) {
    return (
        <div>
            <h1>Campuses</h1>
            <ul>
            { props.campuses && props.campuses.map(campus => {
                return (
                    <li key={campus.id}>
                    <NavLink to={`/campuses/${campus.id}`}
                    activeClassName='active'>
                    <span>{campus.name}</span>
                    </NavLink>
                    </li>
                )
            })
            }
            </ul>
        </div>
    )
}

const mapStateToProps = function(storeState, ownProps){
    return {
        campuses: storeState.campuses
    }
}

const CampusListContainer = connect(mapStateToProps)(CampusList)
export default CampusListContainer