import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div>
            <h1>Our Services</h1>
            <div className="card-deck py-5">
                <div className="card">
                    <img className="card-img-top w-100" src="https://image.freepik.com/free-vector/physician-visit-cartoon-composition_1284-25919.jpg" alt="Card-1" />
                    <div className="card-body">
                        <h5 className="text-justify">Doctor Care</h5>
                        <p className="text-justify">Description: A doctor may visit a patient at</p>
                        <p>Hi. i'm nothing</p>
                        <button className="bg-warning py-1 px-5">Details</button>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top w-100" src="https://image.freepik.com/free-vector/medical-doctor-clinic-giving-senior-man-injection-coronavirus-vaccine-immunity-health-vaccination-concept-hospital-covid-vaccine-shot-patient_90220-258.jpg" alt="Card-2" />
                    <div className="card-body">
                        <h5 className="text-justify">Nursing Care</h5>
                        <p className="text-justify">Description: The most common form of home</p>
                        <button className="bg-warning py-1 px-5">Details</button>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top w-100" src="https://image.freepik.com/free-vector/ambulance-flat-design_23-2147945997.jpg" alt="Card-3" />
                    <div className="card-body">
                        <h5 className="text-justify">Transportation</h5>
                        <p className="text-justify">Description: There are companies that provide</p>
                        <button className="bg-warning py-1 px-5">Details</button>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top w-100" src="https://image.freepik.com/free-vector/pharmacy-medical-shop-concept_74855-7815.jpg" alt="Card-4" />
                    <div className="card-body">
                        <h5 className="text-justify">Pharmaceutical Service</h5>
                        <p className="text-justify">Description: Medicine and medical equipment can</p>
                        <button className="bg-warning py-1 px-5">Details</button>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top w-100" src="https://image.freepik.com/free-vector/isometric-medical-diagnostic-equipment-set-3d-illustration-computer-tomography-ct_33099-163.jpg" alt="Card-5" />
                    <div className="card-body">
                        <h5 className="text-justify">Imaging</h5>
                        <p className="text-justify">Description: Certain laboratory tests, such as</p>
                        <button className="bg-warning py-1 px-5">Details</button>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top w-100" src="https://image.freepik.com/free-vector/isometric-family-doctor-composition-with-indoor-scenery-home-bedroom-with-medical-specialist-medicine-box-illustration_1284-61126.jpg" alt="Card-6" />
                    <div className="card-body">
                        <h5 className="text-justify">Care from home Health Aides</h5>
                        <p className="text-justify">Description: Home health aides can help</p>
                        <button className="bg-warning py-1 px-5">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;