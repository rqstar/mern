import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    async componentDidMount(){
        //aqui no hay nada
    }

    onSubmit=async(e)=>{
        e.preventDefault();
        const newUser={
            email:this.state.email,
            password:this.state.password
        }
        const res =await axios.post('http://localhost:4000/api/login',newUser);
        console.log(res.data.message)
    }

    onChangeLogin = (e) => {
        
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card-body body">
                        <h3>Login</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChangeLogin}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contrasenia"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChangeLogin}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-danger">
                                LOGIN
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}