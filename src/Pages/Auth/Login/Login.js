import React, { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Login.css';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../init-config';
import { toast } from 'react-toastify';
import google from '../../../assets/logos/google.jpg';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [user] = useAuthState(auth);
    
    const navigate = useNavigate();
    const location =  useLocation();
    const from = location.state?.from?.pathname || "/";

    if(user){
        navigate(from, { replace: true });
    }
    
   
    const [
        signInWithEmailAndPassword,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [signInWithGoogle, userGoogle] = useSignInWithGoogle(auth);
   
      // USER LOGIN
      const userLoginHandler = event =>{

            event.preventDefault();
            signInWithEmailAndPassword(email, password);
            event.target.reset();
            if(user || userGoogle ){
                toast.success('Login Successfully');
            };
      };


    return (
        <>
            <div className="w-50 mx-auto mt-5 pt-5">
                <Form onSubmit={userLoginHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e)=> setEmail(e.target.value) } name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e)=> setPassword(e.target.value)} name='password' type="password" placeholder="Password" autoComplete="on" required/>
                    </Form.Group>
                     
                        {
                            loading && <Spinner animation="border" /> 
                        }
                        
                        <p> {error?.message} </p>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <span className='mx-5'> 
                        Don't have an account ? <Link to='/register'> Create an account</Link>
                    </span> 
                </Form>

                <div className="mt-2">
                    <div className="d-flex justify-content-center align-items-center w-100">
                        <span className='login-or w-50'> </span>
                        <h4> OR </h4>
                        <span className='login-or w-50'> </span>
                    </div>

                   
                    <Button variant='outline-info' onClick={()=> signInWithGoogle() } 
                            className='d-flex justify-content-around align-items-center
                                        rounded border w-50 mx-auto py-2'
                            >
                                <img width="40px" className='rounded-circle' src={google} alt="" />
                                <h5> Continue with Google </h5>
                    </Button>
                    
                </div>
            </div>
        </>
    );
};

export default Login;