import React, {Component} from 'react'
import store, { postStudent, writeStudent } from '../store'
import axios from 'axios'

export default class NewStudentEntry extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            gpa: 0,
            campusId: 0
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        
        axios.post('api/students', this.state)
        .then(res => res.data)
        .then(newStudent =>{
            res.json(newStudent)
            // this.setState({
            // firstName:
        })
        }

    handleChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value });
      }
      
    handleSubmit(evt){
        evt.preventDefault()

        const {newStudentEntry} = this.state;

        const content = newStudentEntry
        store.dispatch(postStudent(content))
        store.dispatch(writeStudent(''))
    }

    render () {
        return (
            
          <form onSubmit={this.handleSubmit}>
          
            <label>First Name</label>
            <input type="text" name="firstName" onChange={this.handleChange} />

            <label>Last Name</label>
            <input type="text" name="lastName" onChange={this.handleChange} />
            
            <label>Email</label>
            <input type="text" name="email" onChange={this.handleChange} />

            <label>GPA</label>
            <input type="text" name="gpa" onChange={this.handleChange} />

            <label>Campus</label>
            <input type="text" name="campus" onChange={this.handleChange} />
            <button type="submit"> Submit </button>
          </form>
        );
      }
}