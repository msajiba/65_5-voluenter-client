import React from 'react';
import Table from 'react-bootstrap/Table';
import img from '../../assets/logos/trash-2 9.png';

const RegisterList = ({list}) => {
    const {name, user, date, description, volunteername} = list;
    return (
        <div>
           

               
                    <tr>
                        <td> {name} </td>
                        <td> {user} </td>
                        <td> {date} </td>
                        <td> {volunteername} </td>
                        <td> <img className='w-25' src={img} alt="" /> </td>
                    </tr>
               
            
         
        </div>
    );
};

export default RegisterList;