import React, { Component } from 'react';
import { ControlLabel, FormControl, Col, Button, Checkbox } from "react-bootstrap"
import "./index.css"

class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            emailId: "",
            password: "",
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
            <div className="signIn-component">

                <Col lg={10} md={10} xs={12} sm={12}>
                    <form onClick={this.submit}>
                        <div className="Main-div">

                            <Col md={12} lg={12} xs={12} sm={12} className="flex-and-center">
                                <Col md={3} lg={3} xs={12} sm={4}>
                                    <div><h3 className="heading">Login</h3></div>
                                </Col>
                            </Col>

                            <Col md={12} lg={12} xs={12} sm={12} className="flex-and-center">

                                <Col md={3} lg={3} xs={12} sm={4}>
                                    <ControlLabel>Email</ControlLabel>
                                    <FormControl
                                        type="text"
                                        // value={this.state.value}
                                        name="emailId"
                                        placeholder="Email"
                                        onChange={this.handleChange}
                                    />
                                </Col>

                            </Col>


                            <Col md={12} lg={12} xs={12} sm={12} className="flex-and-center">

                                <Col md={3} lg={3} xs={12} sm={4}>
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl
                                        type="text"
                                        // value={this.state.value}
                                        placeholder="*******"
                                        name="password"
                                        onChange={this.handleChange}
                                    />
                                </Col>

                            </Col >


                            <Col md={12} lg={12} xs={12} sm={12} className="flex-and-center">
                                <Col md={3} lg={3} xs={12} sm={4} className="flex-and-center">
                                    <Button className="signIn-btn" type="submit">Log In</Button>
                                </Col>
                            </Col>


                            <Col md={12} lg={12} xs={12} sm={12} className="flex-and-center">

                                <Col md={3} lg={3} xs={12} sm={4} className="flex-and-spacebetween">

                                    <Col md={4} lg={4} xs={6} sm={4} className="flex-and-flexStart noPad-mar">
                                        <Checkbox readOnly className="checkbox-class" />
                                        <p className="remember-para">Remeber</p>
                                    </Col>

                                    <Col md={6} lg={6} xs={12} sm={6} className="flex-and-flexEnd noPad-mar">
                                        <p className="agree-para">Forgot Password?</p>
                                    </Col>
                                </Col>
                            </Col>

                            <Col md={12} lg={12} xs={12} sm={12}>
                                <div className="line2" />
                            </Col>

                            <div><h3 className="heading">Dont have an account? <span className="Signup-word">Sign Up.</span></h3></div>

                        </div>
                    </form>
                </Col>
            </div >
        );
    }
}

export default SignIn;
