import React, { Component } from 'react'
import axios from 'axios'
import CampusList from '../components/CampusList'
import { Link } from 'react-router-dom'

export default class SelectedCampus extends Component {
    constructor() {
        super()
        this.state = {
            campus: {}
        }
    }

    componentDidMount() {
        const campusId = this.props.match.params.id;

        axios.get(`/api/campuses/${campusId}`)
            .then(res => res.data)
            .then(campus => this.setState({
                campus
            }))
    }

    render() {
        const campus = this.state.campus
        return (
            <div>
                <h2>{campus.name} </h2>
                <h3>Campus Id: {campus.id} </h3>
                <h4>{campus.description}</h4>
                <Link to="/students"><button>Back to Campuses</button></Link>
            </div>
        )
    }

}