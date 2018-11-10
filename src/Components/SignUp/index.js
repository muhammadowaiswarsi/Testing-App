import React, { Component } from 'react';
import { ControlLabel, FormControl, Col, Button, Checkbox } from "react-bootstrap"
import "./index.css"

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            emailId: "",
            password: "",
            confirmPassword: ""
        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    submit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className="signUp-component">

                <Col lg={10} md={10} xs={12} sm={12}>
                    <form onClick={this.submit}>
                        <div className="Form-div">
                            <div><h3 className="heading">Sign Up For Your Account</h3></div>

                            <Col md={12} lg={12} xs={12} sm={12} className="flex-and-center">
                                <div className="line" />
                            </Col>

                            <Col md={12} lg={12} xs={12} sm={12}>

                                <Col md={6} lg={6} xs={12} sm={6}>
                                    <ControlLabel>First Name</ControlLabel>
                                    <FormControl
                                        type="text"
                                        // value={this.state.value}
                                        name="firstName"
                                        placeholder="first name"
                                        onChange={this.handleChange}
                                    />
                                </Col>

                                <Col md={6} lg={6} xs={12} sm={6}>
                                    <ControlLabel>Last Name</ControlLabel>
                                    <FormControl
                                        type="text"
                                        // value={this.state.value}
                                        name="lastName"
                                        placeholder="last name"
                                        onChange={this.handleChange}
                                    />
                                </Col>
                            </Col>

                            <Col md={12} lg={12} xs={12} sm={12}>

                                <Col md={6} lg={6} xs={12} sm={6}>
                                    <ControlLabel>Email Adress</ControlLabel>
                                    <FormControl
                                        type="text"
                                        // value={this.state.value}
                                        name="emailId"
                                        placeholder="example@email.com"
                                        onChange={this.handleChange}
                                    />
                                </Col>

                            </Col>


                            <Col md={12} lg={12} xs={12} sm={12}>

                                <Col md={6} lg={6} xs={12} sm={6}>
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl
                                        type="text"
                                        // value={this.state.value}
                                        placeholder="*******"
                                        name="password"
                                        onChange={this.handleChange}
                                    />
                                </Col>

                                <Col md={6} lg={6} xs={12} sm={6}>
                                    <ControlLabel>Confirm Password</ControlLabel>
                                    <FormControl
                                        type="text"
                                        // value={this.state.value}
                                        name="confirmPassword"
                                        placeholder="*******"
                                        onChange={this.handleChange}
                                    />
                                </Col>

                            </Col >

                            <Col md={12} lg={12} xs={12} sm={12} className="agreement-para">
                                <Col md={3} lg={3} xs={12} sm={4} className="agreement-para">
                                    <Checkbox readOnly className="checkbox-class" />
                                    <p className="agree-para">I agree to the <span className="agree-para-span">Terms of Services</span> &amp; <span className="agree-para-span">Privacy Policy</span></p>
                                </Col>
                            </Col>

                            <Col md={12} lg={12} xs={12} sm={12} className="agreement-para">
                                <Col md={3} lg={3} xs={12} sm={4} className="agreement-para">
                                    <Button className="signUp-btn" type="submit">Sign Up</Button>
                                </Col>
                            </Col>

                            <Col md={12} lg={12} xs={12} sm={12}>
                                <div className="line2" />
                            </Col>

                            <div><h3 className="heading">Already have an account? <span className="Login-word">Login.</span></h3></div>

                        </div>
                    </form>
                </Col>
            </div >
        );
    }
}

export default SignUp;
