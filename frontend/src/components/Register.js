import React, { Component } from 'react'
import axios from 'axios'
export default class Register extends Component {

    state = {
        name: '',
        email:'',
        password:'',
        confirmPassword:''
    }
    async componentDidMount() { //Ayuda a ejecutar el codigo una vez el componente ha sido montado
        /*
        Este componente sera utilizado para pedir los datos al servidor
        para mostrarlos en pantalla.
        Para hacer peticiones en el navegador existe una api llamado fetch()
        */

    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newUser={
            name: this.state.name,
            email: this.state.email,
            password:this.state.password,
            confirmPassword:this.state.confirmPassword
        }
        const res=await axios.post('http://localhost:4000/api/register',newUser);
        console.log(res.data.message);
        //this.setState({ name: '' });

    }
    onChangeUserName = (e) => {
        this.setState({
            [e.target.name]: e.target.value //Recupera datos del formulario y actualizar en el estado
        });
        console.log(e.target.name)
    }

    deleteUser = async (id) => {
        await axios.delete('http://localhost:4000/api/users/' + id)
        this.getUsers();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card-card body">
                        <h3>Create New User</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Full Name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChangeUserName} 
                                    required/>
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChangeUserName}                                    
                                    required />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChangeUserName}                                    
                                    required />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm password"
                                    name="confirmPassword"
                                    value={this.state.confirm_password}
                                    onChange={this.onChangeUserName}                                    
                                    required />
                            </div>
                            <button type="submit" className="btn btn-danger">
                                SAVE
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}
