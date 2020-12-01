import React from "react";
import { Button, Form } from 'react-bootstrap';
import './Register.css'
import axios from 'axios';

export default class Register extends React.Component{
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { 
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            biography: '',
            isAdmin: false,
            profilePicture: '',
            posts: [''],
            comments: [''],
            postsUpvoted: [''],
            commentsUpvoted: [''] 
        };
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit(e){
        e.preventDefault();
    
        const { username, password, firstName, lastName, email } = this.state;
       
        console.log(`Form submitted: `);
        console.log(`Username: ${this.state.username}`);
        console.log(`Password: ${this.state.password}`);
        console.log(`First Name: ${this.state.firstName}`);
        console.log(`First Name: ${this.state.lastName}`);
        console.log(`First Name: ${this.state.email}`);


        const newUser = {
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            biography: '',
            isAdmin: false,
            profilePicture: '',
            posts: [''],
            comments: [''],
            postsUpvoted: [''],
            commentsUpvoted: ['']
          };

        axios.post('http://localhost:5000/register', newUser)
            .then(res => {
                console.log(res.data)
            })
        
        this.setState({
            username: '',
            password: '',
            firstName: '',
            email: '',
            biography: '',
            isAdmin: false,
            profilePicture: '',
            posts: [''],
            comments: [''],
            postsUpvoted: [''],
            commentsUpvoted: ['']
        })

        //window.location = "/login";
    }
    render(){
        return (
            <div className="register">
                <Form className = "registerForm">
                    <h1 className="text-center">
                        <span classname="font-weight-bold">
                            Register
                        </span>
                    </h1>
                    <Form.Group>
                        <Form.Label>
                            First Name
                        </Form.Label>
                        <Form.Control name = "firstName" value={this.state.firstName} onChange={e => this.onChange(e)} placeholder="Enter your First Name" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>
                            Last Name
                        </Form.Label>
                        <Form.Control name = "lastName" value={this.state.lastName} onChange={e => this.onChange(e)} placeholder="Enter your Last Name"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>
                            Username
                        </Form.Label>
                        <Form.Control name = "username" value={this.state.username} onChange={e => this.onChange(e)} placeholder="Enter a Username"/>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>
                            Email
                        </Form.Label>
                        <Form.Control name = "email" value={this.state.email} onChange={e => this.onChange(e)} type="email" placeholder="Enter e-mail address" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control name = "password" value={this.state.password} onChange={e => this.onChange(e)} type ="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button onClick={this.onSubmit}>
                        Register
                    </Button>
                </Form>
            </div>
        );
    }
}