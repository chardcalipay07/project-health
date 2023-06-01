import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class EditHealth extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            temperature: '',
            email: '',
            phonenumber: ''
        }

        // this.onFullnameChange = this.onFullnameChange.bind(this)
        this.onValueChange = this.onValueChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    // onFullnameChange(e){
    //     this.setState({
    //         fullname: e.target.value
    //     })
    // }
    

    componentDidMount() {
        try{
        
            axios.get('http://localhost:5000/health/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    fullname: res.data.fullname,
                    temperature: res.data.temperature,
                    email: res.data.email,
                    phonenumber: res.data.phonenumber

                })
            })    
        }catch(err) {
            console.log(err)
        }
    }

    onValueChange(e) {
        this.setState({
            [e.target.dataset.name] : e.target.value
            
        })
    }

    onSubmit(e){
        e.preventDefault();

        const health = {
            fullname: this.state.fullname,
            temperature: this.state.temperature,
            email: this.state.email,
            phonenumber: this.state.phonenumber
        }

        try{
        
            axios.post('http://localhost:5000/health/update/'+this.props.match.params.id, health)
            .then(res => window.location = "/")
            .then()
        } catch(e) {
            console.log("Error: ", e)
        }

    }

    render(){
        return(
            <div className='container'>
                <h1>Update Body Temperature</h1>

                <form onSubmit={this.onSubmit}>

                    <div className='form-group'>
                        <label>Full Name</label>
                        <input className='form-control' type='text' data-name="fullname" onChange={this.onValueChange} value={this.state.fullname} required />
                    </div>
                    <div className='form-group'>
                        <label>Temperature</label>
                        <input className='form-control' type='number' step='0.1' data-name="temperature" onChange={this.onValueChange} value={this.state.temperature} required />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input className='form-control' type='email' data-name="email" onChange={this.onValueChange} value={this.state.email} required />
                    </div>
                    <div className='form-group'>
                        <label>Phone Number</label>
                        <input className='form-control' type='tel' data-name="phonenumber" onChange={this.onValueChange} value={this.state.phonenumber} required />
                    </div>

                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
                
            </div>
        )
    }
}