import React from 'react';
import './IndividualProject.css'

let project = {
    title: "Rescue - Stay connected with your local shelters",
    abstract: "Earlier this year, I was browsing through an animal shelter’s website and fell in love with one of their dogs that was up for adoption. The phone number listed on Google did not pick up when I called, so I took an Uber to head to the animal shelter immediately! When I got there, it turned out she had already been adopted, and the site simply wasn’t up to date. Animal shelter websites are sparse, inconsistent, and often unmaintained. This discourages supporters from making trusted donations, as communication is not constant or clear. For this project, I aimed to provide an app that hosts verified shelters that agree to keep making constant updates in order to encourage more trusted donations. This will hopefully create a stronger community of people who want to support animals in need."
}

function Rescue() {
    return (
        <div className="project-container">
            <h1 className = "main-title">{project.title}</h1>
            <div className="project-grid">
                <div className="grid-item title">Abstract</div>
                <div className="grid-item content">{project.abstract}</div>
                <div className="grid-item title">User Research</div>
                <div className="grid-item content">ux description</div>

                <div className="grid-item title">Solution</div>
                <div className="grid-item content">sol description</div>
            </div>
        </div>
    );
}

export default Rescue;