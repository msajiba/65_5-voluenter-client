import axios from "axios";
import { useEffect, useState } from "react";

const useVolunteers = () => {

    const [volunteers, setVolunteers] = useState([]);

    useEffect( () => {
        
        const getVolunteer = async()=> {
            const {data} = await axios.get('http://localhost:5000/volunteer');
            setVolunteers(data);
        };
            getVolunteer();
        
        
    }, []);
    
    return [volunteers, setVolunteers];

};

export default useVolunteers;