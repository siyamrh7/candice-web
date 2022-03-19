import React, { useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

import {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {SellerRegAction} from '../redux/actions/AuthActions';
function From(props) {
    const dispatch=useDispatch()
const [state,setState]=useState({
name:"",
mobile:"",
email:"",
zipcode:"",
password:"",
category:""
})
    const OnChangeHandler=(e)=>{
setState({...state,[e.target.name]:e.target.value})
    }
    const OnSubmitHandler=(e)=>{
        e.preventDefault()
        console.log(state)
dispatch(SellerRegAction(state))
    }
    
    return (
        <div>
            <h1>{props.fHeading}</h1>
            <h5 className='py-3'>{props.fsHeading}</h5>
            <Form className='form'>
                <Row>
                    <Col sm={6}>
                        <Form.Control onChange={OnChangeHandler} type='text' name="name" placeholder="Full name" />
                    </Col>
                    <Col sm={6}>
                        <Form.Control onChange={OnChangeHandler} type='text' name="mobile" placeholder="Mobile" />
                    </Col>
                    <Col sm={6}>
                        <Form.Control onChange={OnChangeHandler} type='email' name="email" placeholder="Enter Your email" />
                    </Col>
                    <Col sm={6}>
                        <Form.Control  onChange={OnChangeHandler}type="number" name="zipcode" placeholder="ZIP Code" />
                    </Col>
                    <Col sm={6}>
                        <Form.Control onChange={OnChangeHandler} type='password' name="password" placeholder="Password" />
                    </Col>
                    <Col sm={6}>
                        <Form.Select onChange={OnChangeHandler} name="category" aria-label="Default select example" className='form-control'>
                            <option>Select a category</option>
                            <option value="Cleaning">Cleaning</option>
                            <option value="Repair">Repair</option>
                            <option value="Health & Beauty">Health & Beauty</option>
                        </Form.Select>
                    </Col>

                    <Col sm={12}>
                        
                        <button onClick={OnSubmitHandler} className='btn btn-sm'> Get Started</button>
                        
                        <div>
                            <p>
                                Already applied? &nbsp;
                                <span className='text-color'>
                                    <a href=''>
                                        Check your application status here.
                                    </a>
                                </span>
                            </p>


                        </div>
                    </Col>
                </Row>
            </Form>
          
        </div>
    );
}

export default From;