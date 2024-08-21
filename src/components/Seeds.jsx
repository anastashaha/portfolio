import React from 'react';
import './IndividualProject.css'
import seeds_mockup from '../assets/project_images/seeds/seeds_mockup.png'


let project = {
    motivation: "In the wake of the global pandemic, our team recognized a growing trend: people were seeking comfort in the beauty and tranquility of nature, especially those confined to their homes. This sparked an idea to create a platform where individuals could easily access and purchase a variety of beautiful plants. We aimed to create a sleek, user-friendly website that was easy to navigate and beautiful to look at. Our goal was twofold: to bring a piece of nature into every home and develop a core understanding of how to build an e-commerce website from scratch.",
    challenges: "Developing our first e-commerce website presented several technical challenges. Some of the key challenges we faced:",
    cart: " Implementing the cart functionality was a complex task. We needed to design a database schema that effectively linked Carts with Products. ",
    persistent_carts: "Integrating a user account feature introduced the challenge of maintaining persistent carts. To achieve this, we established relationships where a User had many Carts, and these Carts were connected to the Users through CartItems.",
    react_lifecycle: "I took the responsibility of addressing a few scenarios that saved us from an infinite loop had we excluded these checks.",
    checkout: "Implementing a robust and secure checkout method is crucial. This includes integrating reliable payment gateways and ensuring data security during transactions.",
    inventory: "In an improved site, we would like to develop a system for tracking inventory in real-time. This will help in managing stock levels and automatically updating the site when items are sold out, enhancing the user experience.",
    optimization: "Given the increasing trend of mobile shopping, optimizing our website for mobile devices is a top priority, ensuring a seamless and responsive experience across all platforms."
}

function Seeds() {
    return (
        <div className="project-container">
            {/* Title and overview */}
            <div className="project-grid">
                <div className="grid-item left-col-title">
                    <div className="role project-info"><strong>Role:</strong>
                        <div>Fullstack Engineer, Designer</div>
                    </div>
                    <div className="tools project-info"><strong>Tools:</strong>
                        <div>Javascript, React, Redux, Node.js, PostgreSQL </div>
                    </div>
                    <div className="context project-info"><strong>Context:</strong>
                        <div>Group development project (2021)</div>
                    </div>
                    <div className="context project-info"><strong>Team:</strong>
                        <div>Stella Martin, Jaeyong Chung, Bhavani Kolla</div>
                    </div>
                </div>
                <div className="grid-item right-col-title">
                    <h1 className="large-title">Seeds</h1>
                    <p className="title-description">Purchase Beautiful Plants on a Beautiful Site</p>
                </div>
            </div>

            {/* Project mockup */}
            <div className="project-image"><img src={seeds_mockup} alt="Mockup of Seeds website"/></div>

            {/* Motivation */}
            <div className="project-grid">
                <div className="grid-item title">Motivation</div>
                <div className="grid-item content">{project.motivation}</div>
            </div>

            {/* Challenges */}
            <div className="project-grid">
                <div className="grid-item title">Challenges</div>
                <div className="grid-item content">{project.challenges}</div>
                <div className="grid-item content">
                    <ul>
                        <li><strong>Cart logic</strong>: {project.cart}</li>
                        <li><strong>Persistent user carts</strong>: {project.persistent_carts}</li>
                        <li><strong>Understanding the react component lifecycle</strong>: {project.react_lifecycle}</li>
                        <ul>
                            <li>If a user navigated to the cart from elsewhere:</li>
                            <ul>
                                <li>We will have already received the user info from the thunk we called in <code>componentDidMount</code> during the initial render. That way, we can call the thunk to get that user’s respective cart items. </li>
                            </ul>
                        </ul>
                        <ul>
                            <li>If the user has refreshed the cart page:</li>
                            <ul>
                                <li>We check to see that the previous prop’s ID (which would point to no value) is not equal to the current prop’s user ID (which would point to the current user’s ID).</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>If the user has added a product to the cart from the All Products page</li>
                            <ul>
                                <li>Ensure the previous cart’s length is not equal to the current cart’s length </li>
                            </ul>
                        </ul>
                        <ul>
                            <li>If the user updates their quantity for a product on the cart pageIf</li>
                            <ul>
                                <li>Implement a check to see if the user’s subtotal has changed</li>
                            </ul>
                        </ul>
                    </ul>
                </div>
            </div>

            {/* Next Steps */}
            <div className="project-grid">
                <div className="grid-item title">Next Steps</div>
                <div className="grid-item content">
                    <ul>
                        <li><strong>Secure checkout process:</strong> {project.checkout}</li>
                        <li><strong>Inventory management:</strong> {project.inventory}</li>
                        <li><strong>Mobile optimization:</strong> {project.optimization}</li>
                    </ul>
                </div>
            </div>


        </div>
    );
}

export default Seeds;