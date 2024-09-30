import React from 'react';
import './IndividualProject.css'
import code_lecture from '../assets/project_images/databootcamp/code_lecture.png'
import bootcamp1 from '../assets/project_images/bootcamp/bootcamp1.png'
import bootcamp2 from '../assets/project_images/bootcamp/bootcamp2.png'
import bootcamp3 from '../assets/project_images/bootcamp/bootcamp3.png'
import bootcamp4 from '../assets/project_images/bootcamp/bootcamp4.png'
import bootcamp5 from '../assets/project_images/bootcamp/bootcamp5.png'

let project = {
    motivation: "The summer before Stanford, I was keen to explore the local tech and education space in Indonesia and was introduced to Grace Adoe, founder of The IT Girls. I was given the opportunity to design my own bootcamp with my topic of choice, and decided to provide instruction on Python for Data Science and an emphasis on data bias. 50 young women signed up and more than half wrote their first line of code this weekend!",
    challenges: "Developing our first e-commerce website presented several technical challenges. Some of the key challenges we faced:",
    cart: " Implementing the cart functionality was a complex task. We needed to design a database schema that effectively linked Carts with Products. ",
    persistent_carts: "Integrating a user account feature introduced the challenge of maintaining persistent carts. To achieve this, we established relationships where a User had many Carts, and these Carts were connected to the Users through CartItems.",
    react_lifecycle: "I took the responsibility of addressing a few scenarios that saved us from an infinite loop had we excluded these checks.",
    checkout: "Implementing a robust and secure checkout method is crucial. This includes integrating reliable payment gateways and ensuring data security during transactions.",
    inventory: "In an improved site, we would like to develop a system for tracking inventory in real-time. This will help in managing stock levels and automatically updating the site when items are sold out, enhancing the user experience.",
    optimization: "Given the increasing trend of mobile shopping, optimizing our website for mobile devices is a top priority, ensuring a seamless and responsive experience across all platforms."
}

function DataBootcamp() {
    return (
        <div className="project-container">
            {/* Title and overview */}
            <div className="project-grid">
                <div className="grid-item left-col-title">
                    <div className="role project-info"><strong>Role:</strong>
                        <div>Main Instructor, Curriculum Designer</div>
                    </div>
                    <div className="tools project-info"><strong>Tools:</strong>
                        <div>Jupyter Notebook, Python, Pandas</div>
                    </div>
                    <div className="context project-info"><strong>Context:</strong>
                        <div>The It Girls Bootcamp 2024</div>
                    </div>
                </div>
                <div className="grid-item right-col-title">
                    <h1 className="large-title">The It Girls Bootcamp: Data Science, Storytelling and Ethics</h1>
                </div>
            </div>

            {/* Project image */}
            <div className="project-image"><img src={code_lecture} alt="Photo of Anastasha presenting 'Mitigating Bias' lecture"/></div>

            {/* Motivation */}
            <div className="project-grid">
                <div className="grid-item title">Motivation</div>
                <div className="grid-item content">{project.motivation}</div>
            </div>

            {/* Photos of event half grid */}

            <div className="half-grid">
                <div className="left-container"><img src={bootcamp1} alt="First sketch on canvas"/></div>
                <div className="right-container"><img src={bootcamp2} alt="Second draft with electric paint on canvas"/></div>
                <div className="left-container"><img src={bootcamp3} alt="Gif of Anastasha painting a portion of the canvas"/></div>
                <div className="right-container"><img src={bootcamp4} alt="Photo of the finished painting of Marceline on canvas"/></div>
            </div>

            <div className="project-image"><img src={bootcamp5} alt="Photo of Anastasha presenting 'Mitigating Bias' lecture"/></div>

            



    
        </div>
    );
}

export default DataBootcamp;