import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../init-config';
import logo from '../../assets/logos/logo.png';

const VolunteerRegister = () => {

    const {id} = useParams();
    const [user] = useAuthState(auth);
    const [volunteer, setVolunteer] = useState({});

    useEffect(()=> {

        const getVolunteer = async() => {
            const url = `http://localhost:5000/volunteer/${id}`;

            const {data} = await axios.get(url);
            setVolunteer(data);
        };

        getVolunteer();

    } ,[id])

       


    return (
        <>
            <div className="text-center mt-5">
                <img className='w-25' src={logo} alt="" />
            </div>

            <div className="w-50 mx-auto mt-5 py-5 border px-5">
                <Form >
                    <h4 className='mb-5'> Register as a Volunteer </h4>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control  type="text" placeholder="Full Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control value={user?.email}  type="text" placeholder="Username or Email" required disabled />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control  type="date" placeholder="Date" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control  type="text" placeholder="Description" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control  type="text" value={volunteer?.name} required readOnly />
                    </Form.Group>

                    <Button className='w-100' variant="primary" type="submit">
                        Register
                    </Button>

                </Form>
            </div>

        </>
    );
};

export default VolunteerRegister;