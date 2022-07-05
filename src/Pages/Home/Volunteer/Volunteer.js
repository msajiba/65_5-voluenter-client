import React from 'react';
import {Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Volunteer.css';

const Volunteer = ({volunteer}) => {

        const navigate =  useNavigate();

    const {name, img, _id} = volunteer;

    return (
        <>
            <div className=" text-center mt-5">
                <img src={img} alt="volunteer-img" className='w-100 volunteer-img' />
                <Button 
                        onClick={()=> navigate(`/volunterregister/${_id}`) }
                        className='w-100 py-2 fs-5 text-white volunteer-button'
                        > 
                    {name}
                </Button>
            </div>
        </>
    );
};

export default Volunteer;


