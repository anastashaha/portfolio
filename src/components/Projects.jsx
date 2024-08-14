import React from 'react';
import { Link } from 'react-router-dom';
import rescueImage from '../assets/project_images/rescue.png'
import './Projects.css'

function Projects() {
    const projects = [
        { id: 1, image: 'img1.jpg', link: '/itgirls_lessondesign'},
        { id: 2, image: 'path_to_image2.jpg', link: '/projects/kodify' },
        { id: 3, image: 'path_to_image3.jpg', link: '/projects/marceline' },
        { id: 4, image: rescueImage, link: '/rescue' },
        { id: 5, image: 'path_to_image5.jpg', link: '/projects/mentalhealthintech' },
        { id: 6, image: 'path_to_image6.jpg', link: '/projects/seeds' }
    ]
    return (
        <div className="projects-container">
            <h1>Selected Projects</h1>
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
