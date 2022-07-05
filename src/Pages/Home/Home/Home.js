import React, { useState } from 'react';
import useVolunteers from '../../../hooks/useVolunteers';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Volunteer from '../Volunteer/Volunteer';
import './Home.css';


const Home = () => {

    const [volunteers] = useVolunteers();
    const [search, setSearch] = useState('');

    const volunteersSearch = 
    
                volunteers?.filter(volunteer => {
                    if(search.value === ""){
                        return volunteer;
                    }
                    if(volunteer.name.toLowerCase().includes(search.toLowerCase())){
                        return volunteer;
                    }
                })
    
    return (

        <div className="home-container py-5">
            <Container>
                <Row> 
                    <Col> 
                        <div className="text-center">
                            <h3> I GROW BY HELPING PEOPLE IN NEED </h3>
                            <div className="d-flex align-items-center justify-content-center">
                                <input className='py-1 px-2 rounded border'
                                    type="text" name='search' 
                                    value={search}
                                    placeholder='Search...' 
                                    onChange={(e)=> setSearch(e.target.value)}
                                    />
                                <Button className='px-3 pt-2' size='sm' variant='primary'> Search </Button>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col> 
                        <Row>
                            {
                            volunteersSearch.map(volunteer => 

                                <Col md={3} key={volunteer._id}>
                                        <Volunteer volunteer={volunteer}> </Volunteer>
                                </Col>)

                            }
                        </Row>
                    </Col>
                </Row>

            </Container>

        </div>

    );
};

export default Home;