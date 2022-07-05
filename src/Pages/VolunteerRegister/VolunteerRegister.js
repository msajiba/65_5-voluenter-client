import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../init-config';
import logo from '../../assets/logos/logo.png';
import { toast } from 'react-toastify';

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

    const volunteerRegisterHandler = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const user = event.target.user.value;
        const date = event.target.date.value;
        const description = event.target.description.value;
        const volunteername = event.target.volunteername.value;

        const volunteerInformation = {name, user, date, description, volunteername};

        const postVolunteerInfo = async() => {

            const url = 'http://localhost:5000/volunteerinfo' ;
            const res = await axios.post( url, volunteerInformation);
            console.log(res);
        };
        postVolunteerInfo();
        toast.success('Volunteer Register Successfully');
        event.target.reset();

    };
   

    return (
        <>
            <div className="text-center mt-5">
                <img className='w-25' src={logo} alt="" />
            </div>

            <div className="w-50 mx-auto mt-5 py-5 border px-5">
                <Form onSubmit={volunteerRegisterHandler} >
                    <h4 className='mb-5'> Register as a Volunteer </h4>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name='name' type="text" placeholder="Full Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name='user' value={user?.email}  type="text" placeholder="Username or Email" required disabled />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name='date'  type="date" placeholder="Date" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name='description' type="text" placeholder="Description" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name='volunteername' type="text" value={volunteer?.name} required readOnly />
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