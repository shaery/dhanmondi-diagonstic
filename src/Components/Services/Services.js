import React, { useEffect } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';

const Services = () => {


    const [Data, setData] = React.useState([]);
    useEffect(() => {
        fetch('./healthcare.json')
            .then(res => res.json())
            .then(data => { setData(data); console.log(Data); })
    }, [])


    return (
        <div>
            <h1>Our Services</h1>
            <div className="card-deck py-5">

                {Data.map((item, index, name) => {
                    return (
                        <div className="card" key={index}>
                            <img className="card-img-top w-100" src={item.img} alt={name} />
                            <div className="card-body">
                                <h5 className="text-justify">{item.name}</h5>
                                <p className="text-justify">{item.description}</p>
                                {/* <button className="bg-warning py-1 px-5">Details</button> */}
                                <Link to="/service" className="bg-warning py-1 px-5 btn-detail">Details</Link>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
};

export default Services;