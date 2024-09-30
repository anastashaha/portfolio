import React from 'react';
import { Link } from 'react-router-dom';
import rescueImage from '../assets/project_images/rescue/rescue.jpg'
import kodifyImage from '../assets/project_images/kodify/kodify_img.png'
import marcelineImage from '../assets/project_images/marceline/marceline_pp1.png'
import mentalhealthImage from '../assets/project_images/mentalhealthML/mh_img.png'
import seedsImage from '../assets/project_images/seeds/seeds_pp.png'
import bootcampImage from '../assets/project_images/databootcamp/lecture.jpg'

import './Projects.css'

function Projects() {
    const projects = [
        { id: 1, image: bootcampImage, link: '/projects/databootcamp', name: "data science & ethics bootcamp", type: "education design"},
        { id: 2, image: marcelineImage, link: '/projects/marceline', name: "marceline", type: "interactive art; hardware & software"},
        { id: 3, image: kodifyImage, link: '/projects/kodify', name: "kodify", type: "ui/ux, front-end development"},
        { id: 4, image: rescueImage, link: '/projects/rescue', name: "rescue", type: "ui/ux, user research"},
        { id: 5, image: mentalhealthImage, link: '/projects/mentalhealthintech', name: "mental health in tech", type: "machine learning, data science"},
        { id: 6, image: seedsImage, link: '/projects/seeds', name: "seeds", type: "fullstack engineering"}
    ]

    return (
        <div className="projects-container">
            <div className="grid">
                {projects.map((project) => (
                    <Link key={project.id} to={project.link} className="project-square">
                        <img src={project.image} alt={`Project ${project.id}`} />
                        <div class="project-description">
                            <div class="name">{project.name}</div>
                            <div class="type">{project.type}</div>
                        </div>
                    </Link>
                ))}
            </div>   
        </div>
    );
}

export default Projects;