import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Container, Col, Row, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import img from '../../assets/logos/trash-2 9.png';

const VolunteerRegisterList = () => {

    const [registerLists, setRegisterLists] = useState([]);

    useEffect(()=> {

        const getRegisterList = async() => {

            const url = 'http://localhost:5000/volunteerinfo';
            const {data} = await axios.get(url);
            setRegisterLists(data);
        };   

        getRegisterList();

    }, []);

    console.log(registerLists);

    return (
        <>
           
        <Container>
            <Row>
                <Col>
                       
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th> Name </th>
                            <th> Email </th>
                            <th> Register Date </th>
                            <th> Volunteer List </th>
                            <th className='text-center'> Action </th>
                            
                        </tr>
                    </thead>

                    <tbody>
                                {
                                registerLists.map(list=> 

                                    <tr >
                                        <td> {list.name} </td>
                                        <td> {list.user} </td>
                                        <td> {list.date} </td>
                                        <td> {list.volunteername} </td>
                                        <td className='text-center'> 
                                            <Button variant='danger'> Delete </Button>
                                        </td>
                                    </tr>)  
                                }
                
                    </tbody>
                </Table>

             </Col>
            </Row>    
        </Container>        
                            
                 
        </>
    );
};

export default VolunteerRegisterList;