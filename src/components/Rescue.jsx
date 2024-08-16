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
    title: "Rescue - Stay connected with your local shelters",
    abstract: "Earlier this year, I was browsing through an animal shelter’s website and fell in love with one of their dogs that was up for adoption. The phone number listed on Google did not pick up when I called, so I took an Uber to head to the animal shelter immediately! When I got there, it turned out she had already been adopted, and the site simply wasn’t up to date. Animal shelter websites are sparse, inconsistent, and often unmaintained. This discourages supporters from making trusted donations, as communication is not constant or clear. For this project, I aimed to provide an app that hosts verified shelters that agree to keep making constant updates in order to encourage more trusted donations. This will hopefully create a stronger community of people who want to support animals in need.",
    user_research: "To better understand the target audience, I first created some personas to identify potential pain points from various user groups.",
    solution_p1: "In response to the challenges identified through extensive research and user feedback, I decided to create an app that addresses the concerns of trust, transparency, and engagement with animal shelters. Rescue offers a singular, reliable, and user-friendly digital space for animal lovers and donors.",
    solution_p2: "Rescue ensures that only verified shelters committed to regular updates are featured. This enhances donor trust by providing a clear, consistent view of how contributions are utilized, bringing tangible stories of impact directly to the users. Additionally, the integration of secure payment options within the app addresses the need for safe and effortless donation processes.",
    solution_p3: "Understanding the difficulty users face in navigating multiple shelter websites, Rescue consolidates this scattered information into one central hub. This not only simplifies the search for reputable shelters but also allows users to easily follow and support their favorite shelters without the hassle of tracking multiple sources. Beyond just monetary support, Rescue recognizes the eagerness of many to contribute their time and effort by introducing a seamless volunteering sign-up process. The app's interactive features, such as direct messaging with shelters and real-time updates on animals, enable users to engage more personally and meaningfully.",
    wireframes: "I wanted to focus on a few key user flows for the app’s MVP:",
    final_design: "The final design of Rescue combines warmth and simplicity, mirroring the app's ethos of community support. Opting for a warm color palette, the interface fosters a friendly, inviting atmosphere, encouraging engagement and a sense of belonging. The user interface is deliberately clean and straightforward, prioritizing ease of navigation to avoid confusion and ensure accessibility for all users. This design approach not only enhances the user experience but also seamlessly aligns with Rescue’s mission to connect, support, and uplift animal shelters and their communities through a unified digital platform.",
    reflections: "Delving into my first UX project and learning the ropes of design left me with a deep sense of satisfaction. This endeavor has taught me the significance of user-centric design and its impact. Seeing my ideas take shape, addressing real-world problems, and enhancing user interaction, was both rewarding and inspiring. , I was deeply engaged in this design process. Ideating and coming up with a solution for a problem that I personally faced was empowering, and fueled excitement within me to keep creating. ",
}

function Rescue() {
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

            {/* Project image */}
            <div className="project-image">
                <img src={rescue_img} alt="Rescue image" />
            </div>


            {/* Abstract */}
            <div className="project-grid">
                <div className="grid-item title">Abstract</div>
                <div className="grid-item content">{project.abstract}</div>
                <div className="grid-item title">User Research</div>
                <div className="grid-item content">{project.user_research}</div>
            </div>

            {/* User Research */}
            <div className="project-image">
                <img src={rescue_personas} alt="Rescue user personas" />
            </div>

            <div className="project-image">
                <img src={rescue_userjourney} alt="Rescue user journey map" />
            </div>

            <div className="project-grid">
            <div> Through this research, I uncovered a few key insights: </div>
            <ul>
                <strong>(1) Users do not trust making a donation to an unmaintained website</strong>
                    <ul>
                        <li>Having a well-maintained app with secure payment options can help donors feel safe in their donations</li>
                    </ul>
                <strong>(2) Users typically do not know how their donations are being used</strong>
                    <ul>
                        <li>Verifying shelters before adding them to the app and ensuring that they provide constant updates will keep donors updated on their impact</li>
                    </ul>
                <strong>(3) Users cannot keep track of scattered shelter websites</strong>
                    <ul>
                        <li>Consolidating all shelters in one app will provide users with a single source of truth for all of their favourite shelters</li>
                    </ul>
                <strong>(4) Users find it difficult to stay connected with shelters</strong>
                    <ul>
                        <li>Providing the ability to message shelters and view updates will allow users to feel connected with the community</li>
                    </ul>
            </ul>
            </div>

            {/* Solution*/}
            <div className="project-grid">
                <div className="grid-item title">Solution</div>
                <div className="grid-item content">{project.solution_p1}</div>
                <div className="grid-item content">{project.solution_p2}</div>
                <div className="grid-item content">{project.solution_p3}</div>
            </div>

            {/* Wireframes*/}
            <div className="project-grid">
                <div className="grid-item title">Wireframes</div>
                <div className="grid-item content">I wanted to focus on a few key user flows for the app’s MVP:</div>
                <div className="grid-item content">
                    <ul>
                        <li>Users can  view a list of their favorite shelters and their corresponding updates</li>
                        <li>Users can message shelters directly</li>
                        <li>Users can view individual animal cards to stay updated on their progress and status updates</li>
                        <li>Users can make a donation directly from the app</li>
                    </ul>
                </div>
            </div>

            <div className="project-image">
                <img src={rescue_wireframes} alt="Rescue wireframes" />
            </div>

            <div className="project-image">
                <img src={rescue_digi_wireframes} alt="Rescue digital wireframes" />
            </div>

            {/* Usability study */}
            <div className="project-grid">
                <div className="grid-item title">Usability Study</div>
                <div className="grid-item content">I interviewed 5 participants who interacted with the low fidelity prototype in order to receive feedback and collect some insights. I collected quotes from 5 participants and split the content into 5 main sections. </div>
            </div>

            <div className="project-image">
                <img src={rescue_usabilitystudy} alt="Rescue post-its" />
            </div>

            <div className="project-grid">
            <div> From these sentiments, I identified 3 main pain points: </div>
            <ul>
                <ul>
                <strong>(1) Users do not trust making a donation to an unmaintained website</strong>
                </ul>
                <ul>
                <strong>(2) Most users did not feel very secure when making a donation</strong>
                </ul>
                <ul>
                <strong>(3) Most users want to keep track of specific animals</strong>
                </ul>
            </ul>
            </div>

            {/* Final Design */}
            <div className="project-grid">
                <div className="grid-item title">Final Design</div>
                <div className="grid-item content">{project.final_design}</div>
            </div>

            <div className="project-grid">
                <div className="grid-item gif"> 
                    <img src={donation_gif}/>
                </div>
                <div className="grid-item content">
                    <strong className="gif-title">Make a Donation</strong>
                    <div>Rescue allows you to seamlessly donate through a secure payment process, offering you the ability to remain anonymous.</div>
                </div>
            </div>

            <div className="project-grid">
                <div className="grid-item gif"> 
                    <img src={update_gif}/>
                </div>
                <div className="grid-item content">
                    <strong className="gif-title">View Shelter and Individual Animal Updates</strong>
                    <div>Stay in touch with your favorite animals and turn your notifications on for the shelters and animals you are most invested in!</div>
                </div>
            </div>

            <div className="project-grid">
                <div className="grid-item gif"> 
                    <img src={volunteer_gif}/>
                </div>
                <div className="grid-item content">
                    <strong className="gif-title">Sign Up to Volunteer or Foster</strong>
                    <div>Users can easily sign up for volunteering slots from each Shelter card.</div>
                    <div>Users can also sign up to foster individual animals, and their profiles will be shared with the shelter for review.</div>
                </div>
            </div>

            <div className="project-grid">
                <div className="grid-item gif"> 
                    <img src={message_gif}/>
                </div>
                <div className="grid-item content">
                    <strong className="gif-title">Keep in Touch With Shelters Via Messages</strong>
                    <div>You can easily stay in touch with shelters by messaging them directly within the app.</div>
                </div>
            </div>

            {/* Reflections & Next Steps */}
            <div className="project-grid">
                <div className="grid-item title">Reflections & Next Steps</div>
                <div className="grid-item content">{project.reflections}</div>
                <div className="grid-item content">As I think about next steps, I focused on a few features I would like to see in future iterations.</div>

                <div className="grid-item content">
                <ul>
                    <strong>(1) Enhancing User Profiles:</strong>
                        <ul>
                            <li>Implement separate views for different types of users, like volunteers and adopters/fosters, to provide a more tailored and intuitive user experience.</li>
                        </ul>
                    <strong>(2) Community Engagement:</strong>
                        <ul>
                            <li>Integrate interactive features such as commenting, to bolster community interaction within the app.</li>
                            <li>Develop a recognition system for top contributors, like 'Top Donors,' to encourage and celebrate community participation and generosity.</li>
                        </ul>
                </ul>    
                </div>
            </div>
        </div>
    );
}

export default Rescue;