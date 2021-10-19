import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-main">
            <h1>About us</h1>
            <div>
                <img src="https://scontent.fcgp17-1.fna.fbcdn.net/v/t1.6435-9/179742310_111625351071533_1478037661878313750_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=G370Qnjh0uEAX_V5IOG&_nc_oc=AQnTb5OBpJTbIGGTFZFJF6R4Dx-DEIsxTUN9ifuOluUsfcyaQLkoBEOHVaxM5k1aBQc&_nc_ht=scontent.fcgp17-1.fna&oh=6f31d9d16c55f7278b058aba3cd70eeb&oe=61916481" className="w-100" alt="Banner" />
            </div>
            <div>
                <h4>Dhanmondi Diagnostic  and Consultation Centre</h4>
                <p>Dhanmondi Diagnostic  and Consultation Centre is an advanced Centre for diagnostic and medical services. It is one of the prestigious diagnostic complexes of Bangladesh which started its activities in 2020. Dhanmondi Diagnostic  and Consultation Centre is the largest diagnostic services provider organization in private sector of the country. It is been pioneer in introducing world latest medical equipments and advanced technology to provide round the clock medical investigations and consultancy services.
                    LEGAL STATUS Dhanmondi Diagnostic  and Consultation Centre is a private limited company registered with the Ministry of Health & Family Welfare, People’s Republic Govt. of Bangladesh having License.</p>
            </div>
            <br />


            <div>
                <h4>Our Goal</h4>
                <ul>
                    <li>To establish a referral Diagnostic and Medical Services Centre.</li>
                </ul>
            </div>
            <br />

            {/*--------------------------------- Company Objective ---------------------------*/}
            <div>
                <h4>Our Objectives</h4>
                <ul>
                    <li>To render the world standard diagnostic service to the people of the country at an affordable cost and in turn to limit the outflow of the patient abroad at the expense of heard earn foreign currency by providing quality diagnostic services.</li>

                    <li>Out door basis treatment by renowned General Practitioners, Consultants and Professors in different medical fields.</li>

                    <li>To promote Health Education & Medical Services.</li>

                    <li>Day care Centre for follow-up cardiac renal and oncology patients.</li>

                    <li>To build a full fledged specialized (Tertiary) Hospital.</li>

                    <li>Set up Satellite collection Centre.</li>
                </ul>
            </div>
        </div>
    );
};

export default About;