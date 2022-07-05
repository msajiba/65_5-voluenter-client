import axios from 'axios';
import React from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import { toast } from 'react-toastify';

const AddVolunteer = () => {

    const addVolunteer = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.img.value;
        const volunteer = {name, img};

        const postVolunteer = async() =>{
            const res = await axios.post('http://localhost:5000/volunteer', volunteer);
            console.log(res);
        };
        postVolunteer();
        toast.success('Volunteer Add Successfully');
        e.target.reset();
    }

    return (
        <>
            <Container>
                <Row> 
                    <Col> 
                        <div className="w-50 mx-auto border shadow px-5 my-5 py-5 rounded">
                            <Form onSubmit={addVolunteer}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" name='name' placeholder="Enter Volunteer Name" required/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="text" name='img' placeholder="Enter Image Url" required/>
                                </Form.Group>
                                
                                <Button variant="primary" type="submit">
                                    Add Volunteer
                                </Button>
                            </Form>
                        </div>
                     </Col>
                </Row>

            </Container>
        </>
    );
};

export default AddVolunteer;