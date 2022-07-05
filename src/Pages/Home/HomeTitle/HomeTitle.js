import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

const HomeTitle = () => {
    return (
      

        <Container>
            <Row> 
                <Col> 
                    <div className="text-center">
                        <h3> I GROW BY HELPING PEOPLE IN NEED </h3>
                        <div className="d-flex align-items-center justify-content-center">
                            <input className='py-1 px-2 rounded border' type="text" name='search' placeholder='Search...' />
                            <Button className='px-3 pt-2' size='sm' variant='primary'> Search </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeTitle;