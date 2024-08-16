import React from 'react';
import './IndividualProject.css'
import kodify_main from '../assets/project_images/kodify/kodify_main.png'
import kodify_user_personas from '../assets/project_images/kodify/kodify_user_personas.jpg'
import competitive_audit from '../assets/project_images/kodify/kodify_competition.jpg'
import fim from '../assets/project_images/kodify/feasibility_impact_matrix.jpg'
import mid_proto from '../assets/project_images/kodify/mid-fi-prototypes.jpg'
import usability_study from '../assets/project_images/kodify/kodify_usability_study.jpg'
import login_gif from '../assets/project_images/kodify/kodify_login.gif'
import discover from '../assets/project_images/kodify/kodify_discover.gif'
import quiz_gif from '../assets/project_images/kodify/kodify_quiz.gif'
import hint_gif from '../assets/project_images/kodify/kodify_hint.gif'

let project = {
    motivations_1: "In 2021, I completed a 1-week development challenge to program a progressive web app that introduces coding concepts to younger populations. Based on my personal experience of originally feeling too intimidated to even fathom attempting to learn these skills, I envisioned a resource that could have made me feel welcomed and encouraged to be part of this community. I believe we should push STEM education to be relatable and exciting for all kinds of personalities.",
    motivations_2: "Deciding to dive deeper into the design process, I revisited this project in 2023 to better visualize Kodify’s potential to introduce coding in a context that is exciting, digestible, and non-intimidating.",
    problem: "In today's tech-driven world, understanding coding and technology is increasingly vital. Early exposure to coding equips children with problem-solving skills, logical thinking, and creative expression. However, many regions lack formal education in coding, and stereotypes often label coding as overly complex or exclusive to certain demographics. My personal experience of only being exposed to technology after arriving in the U.S. amplifies my desire to change this narrative.",
    goal: "Kodify aims to demystify programming for children and teenagers, presenting it in an enjoyable and engaging manner. The goal is to cultivate positive attitudes towards coding, spark curiosity, and ease the transition into technology-focused academic environments.",
    user_research: "I conducted qualitative research by interviewing 5 individuals aged 12-17 from various regions to uncover their perceptions and barriers towards coding. Based on these interviews, I created 3 main user personas to better understand the main features that this app should provide.",
    competitive_audit: "I then conducted a competitive audit to understand the current landscape of coding apps for children. This process helped identify key market trends, assess competitors' strengths and weaknesses, and uncover gaps in the market. From this analysis, I identified a few gaps and opportunities.",
    fim_1: "To narrow down on a solution, I created a feasibility-impact matrix. This highlighted that while many options could enrich the learning experience, the practicality of their implementation varied significantly. I honed in on the solution of teaching core concepts through engaging quiz-style interactions. ",
    fim_2: "Implementing these courses aims to deliver core programming concepts in an interactive format that captivates children's interest. This method is both feasible and highly effective in reinforcing learning through immediate application and feedback.",
    solution: "Based on the feasibility-impact matrix, I landed on Kodify, an innovative app designed to gamify the coding learning process that targets a younger audience. It aims to make coding languages and concepts engaging and accessible, presenting them in a game-like environment with quiz questions to strengthen knowledge of core concepts. This approach is intended to foster early interest in technology and coding, particularly in areas where such education is not part of the standard curriculum.",
    prototyping: "To test this solution, I created mid-fidelity prototypes and focused on the following key user flows:",
    usability_study: "In the unmoderated usability study, I had the opportunity to gather insightful feedback from 5 participants. When reviewing the feedback, I organized the quotes into three primary sections that were frequently mentioned: the effectiveness of pop-up alerts and hints, the overall user interface, and the app's ease of use. Encouragingly, the intuitive nature of the user flows was a standout positive aspect among the participants.",
    final_design_1: "Following the insightful feedback received from the usability study, the final design of Kodify has evolved into a vibrant and captivating application, embracing a semi-retro technology theme that resonates well with our young audience. The user interface now includes custom graphic designs for each icon, bringing a unique and playful aesthetic to the app. Special attention was given to ensuring high contrast in the design, including harsh outlines, enhancing accessibility and ease of use. This focus on visual accessibility aids in clearer navigation and caters to a wider range of users with different visual needs.",
    final_design_2: "In addition to these aesthetic improvements, the app's functionality has been enhanced. The “Discover” screen allows users to explore options and promotes more learning. ",
}

function Kodify() {
    return (
        <div className="project-container">
            {/* Title and overview */}
            <div className="project-grid">
                <div className="grid-item left-col-title">
                    <div className="role project-info"><strong>Role:</strong>
                        <div> Frontend Engineer, UX Designer/ Researcher</div>
                    </div>
                    <div className="tools project-info"><strong>Tools:</strong>
                        <div> Figma, Procreate, Javascript, React, Progressive Web App, Node.js, HTML/CSS, Bootstrap </div>
                    </div>
                    <div className="context project-info"><strong>Context:</strong>
                        <p> Development project (2021) </p>
                        <p> Redesign case study (2023) </p>
                    </div>
                </div>
                <div className="grid-item right-col-title">
                    <h1 className="large-title">Kodify</h1>
                    <p className="title-description">Introducing kids to coding</p>
                </div>
            </div>

            {/* Project image */}
            <div className="project-image">
                <img src={kodify_main} alt="Kodify image" />
            </div>

            {/* Motivations, The Problem, The Goal */}
            <div className="project-grid">
                <div className="grid-item title">Motivations</div>
                <div className="grid-item content">{project.motivations_1}</div>
                <div className="grid-item content">{project.motivations_2}</div>
                <div className="grid-item title">The Problem</div>
                <div className="grid-item content">{project.problem}</div>
                <div className="grid-item title">The Goal</div>
                <div className="grid-item content">{project.goal}</div>
            </div>

            {/* Understanding the User */}
            <div className="project-grid">
                <div className="grid-item title">Understanding the User</div>
                <div className="grid-item content">{project.user_research}</div>
            </div>

            <div className="project-image">
                <img src={kodify_user_personas} alt="Kodify user personas" />
            </div>

            <div className="project-grid">
                <div className="content">From these findings, I narrowed it down to a few pain points:</div>
                <div className="content">
                    <ul>
                        <li>Coding is <strong>daunting</strong>!</li>
                        <li>Lessons online or in school <strong>don't adjust to the varying learning speeds</strong> of individual kids.</li>
                        <li>A lot of resources appear to be <strong>not engaging or fun</strong>.</li>
                    </ul>
                </div>
            </div>

            {/* Competitive Audit */}
            <div className="project-grid">
                <div className="grid-item title">Competitive Audit</div>
                <div className="grid-item content">{project.competitive_audit}</div>
                <div className="grid-item content"> <strong>(1) Lack of Personalization: </strong> Many apps do not offer personalized learning paths, which can cater to the varied learning speeds and styles of children.</div>
                <div className="grid-item content"> <strong>(2) Focus on Younger Age Groups: </strong> Most apps are targeted towards much younger children. There's an opportunity to create content for older children and teens that balances fun and more advanced concepts.</div>
                <div className="grid-item content"> <strong>(3) Gamification and Social Interaction: </strong> While some apps incorporate game-like elements, there's room for an app that boasts engaging and fun design while integrating a stronger social component, allowing users to share progress and publicize their developing skills.</div>
            </div>

            <div className="project-image">
                <img src={competitive_audit} alt="Kodify competitive audit" />
            </div>

            {/* Feasibility-Impact Matrix */}
            <div className="project-grid">
                <div className="grid-item title">Feasibility-Impact Matrix</div>
                <div className="grid-item content">{project.fim_1}</div>
                <div className="grid-item content">{project.fim_2}</div>
            </div>

            <div className="project-image">
                <img src={fim} alt="Kodify feasibility impact matrix" />
            </div>

            {/* Solution */}
            <div className="project-grid">
                <div className="grid-item title">The Solution</div>
                <div className="grid-item content">{project.solution}</div>
            </div>

            {/* Prototyping */}
            <div className="project-grid">
                <div className="grid-item title">Prototyping</div>
                <div className="grid-item content">{project.prototyping}</div>
                <div className="grid-item content">
                    <ul>
                        <li>Users can view a comprehensive list of languages and concepts they have selected to add to their learner profile.</li>
                        <li>Users are prompted to answer quiz questions for each section.</li>
                        <li>Users receive instant pop-up feedback upon selecting an answer in quizzes.</li>
                        <li>Users can access helpful hints for each question, providing necessary guidance and support in their learning journey.</li>
                    </ul>
                </div>
            </div>

            <div className="project-image">
                <img src={mid_proto} alt="Kodify mid-fidelity prototypes" />
            </div>

            {/* Usability Study */}
            {/* Consider wrapping each <ul></ul> tag in a grid-item content div to maintain space between the lines */}
            <div className="project-grid">
                <div className="grid-item title">Usability Study</div>
                <div className="grid-item content">{project.usability_study}</div>
                <div className="grid-item content">I was able to identify a few focal points that I would focus on when refining the design:</div>
                <div className="grid-item content">
                    <ul> <strong>(1) Enhance the user interface: </strong> A key takeaway is the need to elevate the UI to be more fun and engaging. I will introduce custom graphic designs and work to create a vibrant and inviting design system that appeals to young learners. </ul>
                    <ul> <strong>(2) Improve navigation for content selection: </strong> Users want to browse a selection of available courses, so I will add a screen that will enable users to choose from a range of languages/concepts/projects. This will offer a more personalized experience. </ul>
                    <ul> <strong>(3) Reposition the hint button: </strong> Feedback indicated that the placement of the hint button at the bottom of the screen was suboptimal, often leading to it being overlooked. To address this, we're repositioning the hint button higher on the screen for better visibility, while still keeping the font small so as to not have it serve as a distraction. </ul>
                </div>
            </div>

            <div className="project-image">
                <img src={usability_study} alt="Kodify usability study" />
            </div>

            {/* Final Design */}
            <div className="project-grid">
                <div className="grid-item title">Final Design</div>
                <div className="grid-item content">{project.final_design_1}</div>
                <div className="grid-item content">{project.final_design_2}</div>
            </div>

            <div className="project-grid">
                <div className="grid-item gif"> 
                    <img src={login_gif}/>
                </div>
                <div className="grid-item content">
                    <strong className="gif-title">Log in and view your profile</strong>
                    <div>Your profile will feature progress bars so you can easily keep track of your learning journey, and attain proficiency in various coding languages and concepts.</div>
                </div>
            </div>

            <div className="project-grid">
                <div className="grid-item gif"> 
                    <img src={discover}/>
                </div>
                <div className="grid-item content">
                    <strong className="gif-title">Discover Languages, Concepts, and Projects to Learn</strong>
                    <div>Add new languages, concepts, or projects to your arsenal of courses to have a wide variety of learning objectives.</div>
                </div>
            </div>


            <div className="project-grid">
                <div className="grid-item gif"> 
                    <img src={quiz_gif}/>
                </div>
                <div className="grid-item content">
                    <strong className="gif-title">Quiz questions will test your knowledge of the lessons</strong>
                    <div>Make progress through lessons by correctly answering questions with code snippets!</div>
                </div>
            </div>

            <div className="project-grid">
                <div className="grid-item gif"> 
                    <img src={hint_gif}/>
                </div>
                <div className="grid-item content">
                    <strong className="gif-title">Open a hint</strong>
                    <div>Click on a hint to help you when you’re feeling stuck!</div>
                </div>
            </div> 

            {/* Reflection */}
            <div className="project-grid">
                <div className="grid-item title">Reflection</div>
                <div className="grid-item content">As I created <i>Kodify</i>, it became clear to me that the real challenge lies in developing material that does two things effectively:</div>
                <div className="grid-item content"><ul>(1) Keeps children interested and eager to learn through engaging design.</ul></div>
                <div className="grid-item content"><ul>(2) Establishes an understanding of core concepts.</ul></div>
                <div className="grid-item content">My personal experiences underscore the need for such a tool; an app like <i>Kodify</i> during my younger years would have introduced me to an otherwise intimidating subject in a manner that would help me associate programming with fun. </div>
                <div className="grid-item content">Understanding these challenges, I aim to provide today's youth with the kind of resource I wish I had — one that will inspire them to learn and explore, and have fun doing it! </div>
            </div>



        </div>
    );
}

export default Kodify;