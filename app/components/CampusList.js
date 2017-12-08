import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import store from '../store'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function CampusList (props) {
    return (
        <div>
            <h1>Campuses</h1>
            <ul>
            { props.campuses && props.campuses.map(campus => {
                return (
                    <li key={campus.id}>
                    <Link to={`/campuses/${campus.id}`}>
                    <span>{campus.name}</span>
                    </Link>
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