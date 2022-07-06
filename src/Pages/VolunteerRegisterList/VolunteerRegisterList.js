import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Container, Col, Row, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import RegisterList from './RegisterList';


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

    //delete volunteer register
    const handleDeleteRegister =async(id) =>{
        const accept = window.confirm('Are you sure delete ?');
        if(accept){
            const url = `http://localhost:5000/volunteerinfo/${id}`;
            const res = await axios.delete(url);
            
            const remain = registerLists.filter(list => list._id !== id);
           setRegisterLists(remain);
           console.log(res);
        }; 
    };



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

                                        <RegisterList 
                                                    list={list}
                                                    handleDeleteRegister={handleDeleteRegister}
                                                    > 
                                        </RegisterList>

                                    )  
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