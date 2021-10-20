import React, { useEffect } from 'react';
import './Service.css';

const Service = () => {

    const [Data, setData] = React.useState([]);
    useEffect(() => {
        fetch('./healthcare.json')
            .then(res => res.json())
            .then(data => { setData(data); console.log(Data); })
    }, [])


    return (
        <div>
            <img src="https://image.freepik.com/free-vector/physician-visit-cartoon-composition_1284-25919.jpg" alt="Doctor_Care" />
            <h5>Doctor Care</h5>
            <h6>Description: A doctor may visit a patient at home to diagnose and treat the illness(es). He or she may also periodically review the home health care needs.</h6>
        </div>
    );
};

export default Service;