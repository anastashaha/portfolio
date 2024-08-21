import React from 'react';
import { Link } from 'react-router-dom';
import rescueImage from '../assets/project_images/rescue/rescue.png'
import kodifyImage from '../assets/project_images/kodify/kodify_img.jpg'
import marcelineImage from '../assets/project_images/marceline/marceline_pp.png'
import mentalhealthImage from '../assets/project_images/mentalhealthML/mh_img.png'

import './Projects.css'

function Projects() {
    const projects = [
        { id: 1, image: 'img1.jpg', link: '/itgirls_lessondesign'},
        { id: 2, image: kodifyImage, link: '/projects/kodify' },
        { id: 3, image: marcelineImage, link: '/projects/marceline' },
        { id: 4, image: rescueImage, link: '/projects/rescue' },
        { id: 5, image: mentalhealthImage, link: '/projects/mentalhealthintech' },
        { id: 6, image: 'path_to_image6.jpg', link: '/projects/seeds' }
    ]
    return (
        <div className="projects-container">
            <div className="grid">
                {projects.map(project => (
                    <Link key={project.id} to={project.link} className="project-square">
                        <img src={project.image} alt={`Project ${project.id}`} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Projects;
