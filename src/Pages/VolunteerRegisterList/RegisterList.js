import React from 'react';
import { Button } from 'react-bootstrap';

const RegisterList = ({list, handleDeleteRegister}) => {
    const {name, user, date, volunteername, _id } = list;

    return (
        <>
           

               
                    <tr>
                        <td> {name} </td>
                        <td> {user} </td>
                        <td> {date} </td>
                        <td> {volunteername} </td>
                        <td className='text-center'> 
                           <Button 
                                    onClick={()=>handleDeleteRegister(_id)}
                                    variant='danger'> Delete </Button>
                        </td>
                    </tr>
               
            
         
        </>
    );
};

export default RegisterList;