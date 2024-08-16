import React from 'react';
import './IndividualProject.css'
import rescue_img from '../assets/project_images/rescue/rescue_img.jpg'
import rescue_personas from '../assets/project_images/rescue/RESCUE_Personas.jpg'
import rescue_userjourney from '../assets/project_images/rescue/rescue_userjourney.jpg'
import rescue_wireframes from '../assets/project_images/rescue/rescue_wireframes.png'
import rescue_digi_wireframes from '../assets/project_images/rescue/RESCUE_lofi_wireframes.jpg'
import rescue_usabilitystudy from '../assets/project_images/rescue/rescue_post-its.png'
import donation_gif from '../assets/project_images/rescue/hifi_proto_donation.gif'
import update_gif from '../assets/project_images/rescue/viewupdates.gif'
import volunteer_gif from '../assets/project_images/rescue/volunteer.gif'
import message_gif from '../assets/project_images/rescue/rescue_message.gif'

let project = {
    motivations: "",
    user_research: "",
    solution_p1: "",
    solution_p3: "",
    wireframes: "",
    final_design: "",
    reflections: "",
}

function Kodify() {
    return (
        <div className="project-container">
            {/* Title and overview */}
            <div className="project-grid">
                <div className="grid-item left-col-title">
                    <div className="role project-info"><strong>Role:</strong>
                        <div> UX Designer, UX Researcher, Illustrator</div>
                    </div>
                    <div className="tools project-info"><strong>Tools:</strong>
                        <div> Figma, Procreate, User Research </div>
                    </div>
                    <div className="context project-info"><strong>Context:</strong>
                        <div> Independent case study (2023) </div>
                    </div>
                </div>
                <div className="grid-item right-col-title">
                    <h1 className="large-title">Rescue</h1>
                    <p className="title-description">Stay connected with your local shelters</p>
                </div>
            </div>

        </div>
    );
}

export default Kodify;