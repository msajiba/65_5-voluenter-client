import React, { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../init-config';
import { toast } from 'react-toastify';


const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      if(user){
        console.log('successfully register')
      }

    const createUserSubmit = event =>{
        event.preventDefault();
        
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        
        createUserWithEmailAndPassword(email, password);

        toast.success('Register Successfully');

        event.target.reset();
    }

    return (
        <>
            <div className="w-50 mx-auto mt-5 pt-5">
                <Form onSubmit={createUserSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" autoComplete="on" required/>
                    </Form.Group>
                    
                        <p>
                             {
                                loading && <Spinner animation="border" /> 
                             }
                        </p>
                        <p> {error?.message} </p>
                    
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                    <span className='mx-5'> 
                        You have an account ? <Link to='/login'> Please Login</Link>
                    </span> 
                </Form>
            </div>
        </>
    );
};

export default Register;