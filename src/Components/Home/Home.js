import React from 'react';
import './Home.css';
import { Container } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';


const Home = () => {
    const { user } = useAuth();
    return (
        <div className="home-main m-0">
            <div>
                <h5>Hello {user.displayName}!!!</h5>
                <img className="w-100" src="https://image.freepik.com/free-vector/medical-science-banner-blue-color-shade_1017-24286.jpg" alt="home-banner" />
            </div>
            <Container>
                <p className="text-dark"><span className="font-weight-bold text-uppercase">Dhanmondi diagnostic and consultation center</span> is dedicated to providing only the very best in diagnosis, management and follow-up care through the combination of our dedicated specialty physicians, friendly compassionate staff and cutting edge technology. Please call to find out more about quality services and convenient appointment times. Our scheduling team will respond as soon as they can once they receive your appointment request.  <br /> <br />
                    <span><h4 className="font-weight-bold">Dhanmondi Diagnostic and Consultation Center</h4>
                        Address: 79 Satmasjid Road, Dhanmondi, Dhaka
                        Phone: 02-41022042, 01774-040049</span></p>

                <img src="https://image.freepik.com/free-vector/flat-hand-drawn-patient-taking-medical-examination_52683-57829.jpg" alt="" />
                <img src="https://image.freepik.com/free-vector/doctor-check-vaccine-dose-covid-corona-virus-pandemic_10045-670.jpg" alt="" />
            </Container>
        </div>
    );
};

export default Home;