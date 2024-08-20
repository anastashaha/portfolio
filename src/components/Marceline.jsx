import React from 'react';
import './IndividualProject.css'
import marceline_image from '../assets/project_images/marceline/marceline_img.jpg'
import signal_test from '../assets/project_images/marceline/test.png'
import basic_circuit from '../assets/project_images/marceline/resistor.png'
import serial_monitor from '../assets/project_images/marceline/serial_monitor.mp4'
import sound_test from '../assets/project_images/marceline/first_sound.mp4'
import multiple_outputs from '../assets/project_images/marceline/multiple_outputs.mp4'
import sketch from '../assets/project_images/marceline/sketch.png'
import refined_sketch from '../assets/project_images/marceline/refined_sketch.jpg'
import first_draft from '../assets/project_images/marceline/first_draft.png'
import second_draft from '../assets/project_images/marceline/second_draft.png'
import painting_gif from '../assets/project_images/marceline/painting.gif'
import finished_painting from '../assets/project_images/marceline/finished_painting.jpg'
import wiring_gif from '../assets/project_images/marceline/wiring.gif'
import hammering_gif from '../assets/project_images/marceline/hammering.gif'
import soldering1 from '../assets/project_images/marceline/soldering.gif'
import soldering2 from '../assets/project_images/marceline/soldering2.gif'
import final_circuit from '../assets/project_images/marceline/final_circuit.png'
import coding_gif from '../assets/project_images/marceline/coding.gif'
import code_screenshot from '../assets/project_images/marceline/code_ss.png'
import final_video from '../assets/project_images/marceline/final_video.mp4'


let project = {
    abstract: "Growing up a musician and artist, everyone (myself included) around me was surprised to find out that I ended up with a STEM degree. I wanted to challenge the notion that creativity and technical skills were mutually exclusive, so I committed to creating a project that would equally involve all of my interests. It was a challenge for me to combine multiple things that lived in very separate sections in my mind. The result of this goal was a painting that I turned into an instrument.",
    learning: "After conducting research to see what was both affordable and feasible, I decided to create the project by doing the following:",
    test: "To investigate this, I created four sections of various paint combinations on my canvas to test the signal transmission for each one.",
    basic_circuit: "Closely following the Bare Conductive tutorial, I built my circuit by connecting the resistor between pin 4 and pin 2, with the former being the Sensor Pin and the latter being the Receive Pin.",
    serial_monitor_test: "Here, I am connecting my Arduino micro to the Arduino IDE and linking the wire to the copper tape on the electric paint area of my canvas. In this video, the Arduino's serial monitor vividly displays the real-time data as I touch the paint area. The numbers on the serial monitor represent capacitive sensor readings — values that indicate the change in capacitance when the electric paint is touched. I confirmed that the signal was successfully being sent due to the noticeable spike in the readings.",
    serial_monitor_test2: "I was able to support my hypothesis that the various paint combinations of regular and electric paint will not significantly interfere with the signal integrity of the individual electric paint sections.",
    learning2: "To achieve the interactive aspect of the project, I developed custom Arduino code specifically tailored to detect changes in capacitance. This code played a crucial role in sensing touch interactions on the electric paint areas of the canvas. Once a touch was detected, the Arduino code translated these capacitive changes into digital signals, which were then communicated via a serial connection.",
    sound_test1: "This script was responsible for interpreting the incoming signals from Arduino. For each signal received, the script triggered a bass note sound. I used Logic Pro to create the audio files by using their built-in bass guitar plugin.",
    sound_test2: "When the Python script is actively running, touching the electric paint area connected to the Arduino successfully triggers the corresponding bass note sound.",
    sound_test3: "The final part of the testing phase was to ensure that my programs would be able to detect multiple touch sensors and produce multiple audio outputs at the same time.",
    ideation: "Marceline the Vampire Queen from Adventure Time has been a pivotal figure in my creative journey. Her rockstar personality inspired a 13-year-old me to purchase a $13 guitar from the street markets of Myanmar, where I slowly learned the instrument using YouTube tutorials. To pay homage to her, I decided to create an interactive painting featuring Marceline, focusing on her iconic long black hair. I envisioned splitting her hair into 18 thick sections, each representing a unique note from \"Everything Stays,\" my favorite song performed by her in the series.",
    rough_sketch: "I started by creating some rough sketches. I planned to connect copper tape along the canvas edges, maintaining the painting's artistic integrity while incorporating functional elements. The challenge was to segregate the regular and electric paint effectively. I strategized to have 18 distinct electric paint areas along the canvas sides, each connected to a strand of Marceline's hair. This required a particular arrangement of her hair to ensure that each strand reached the canvas edge to then be attached to the copper tape.",
    refined_sketch: "Transitioning from rough sketches to a more refined design, I used Procreate to sketch out the final concept. I fine-tuned the design to ensure that it would be practical. The emphasis was on how Marceline's hair would aesthetically and functionally split into 18 sections. I experimented with various arrangements and flows of her hair, aiming for a visually pleasing yet feasible design.",
    ideation2: "For the circuit design of this project, I chose to use the Arduino Due for its capability to handle multiple inputs, necessary for the 18 touch points on the painting for which I needed 18 sensor pins and 18 receiver pins. Each touch point was connected to the Arduino using copper tape attached to the electric paint areas on the canvas edges.",
    ideation3: "To ensure that the circuit would be securely attached to the painting, three wooden planks were secured to the back of the canvas. These planks served as a stable base for attaching the two breadboards and the Arduino, ensuring the electronic components were firmly in place.",
    ideation4: "The final stage of the circuit construction involved soldering wires to the copper tape. I had no experience in soldering, so I referenced these public resources from UC Berkeley’s EECS department:",
    ideation5: "These wires were then connected to the corresponding input pins on the Arduino Due. This setup allowed for the detection of touch interactions on the canvas, facilitating the conversion of these interactions into audio outputs.",
    implementation: "Finally, I refined my testing code and finished programming both the Arduino code and Python script to cover all 18 touch points and notes. I noticed that the capacitive sensors worked much slower with all 18 touch points, and upon testing, discovered that it could maintain its sensing speed with at most 4 touch points.",
    reflection: "I learned so many new things in this process, and the addicting feeling of figuring things out cannot be put into words. Connecting my 3 biggest interests was deeply satisfying and something I cannot wait to do more of, now that I’ve dipped my feet into the intersection of art and technology.",
}

function Marceline() {
    return (
        <div className="project-container">
            {/* Title and overview */}
            <div className="project-grid">
                <div className="grid-item left-col-title">
                    <div className="role project-info"><strong>Role:</strong>
                        <div>Hardware/Software Engineer, Artist</div>
                    </div>
                    <div className="tools project-info"><strong>Tools:</strong>
                        <div>Arduino, Python, Pygame, Circuit Design, Electric Paint</div>
                    </div>
                    <div className="context project-info"><strong>Context:</strong>
                        <div>Independent project (2023)</div>
                    </div>
                </div>
                <div className="grid-item right-col-title">
                    <h1 className="large-title">Marceline</h1>
                    <p className="title-description">Turn your painting into an instrument</p>
                </div>
            </div>

            {/* Project image */}
            <div className="project-image">
                <img src={marceline_image} alt="Image of Marceline painting"/>
            </div>

            {/* Abstract */}
            <div className="project-grid">
                <div className="grid-item title">Abstract</div>
                <div className="grid-item content">{project.abstract}</div>
                <div className="grid-item content">The result of this goal was a painting that I turned into an instrument.</div>
            </div>

            {/* Learning & Experimentation */}
            <div className="project-grid">
                <div className="grid-item title">Learning & Experimentation</div>
                <div className="grid-item content">{project.learning}</div>

                <div className="grid-item content">
                    <ul>1. Use electric paint on canvas</ul>
                    <ul>2. Connect electric paint to copper tape on the back of the canvas</ul>
                    <ul>3. Connect copper tape to wires on a microcontroller</ul>
                    <ul>4. Connect microcontroller to Arduino, using their CapacitiveSensor library to sense the touch signals from the electric paint</ul>
                    <ul>5. Use LogicPro to create bass note sounds to my liking</ul>
                    <ul>6. Connect Arduino code to a Python program to listen for signals and play the corresponding bass notes based on the pin that sends the signal</ul>
                </div>

                <div className="grid-item content">I decided to use <u><a href="https://www.bareconductive.com/">BareConductive</a></u> as my electric paint of choice due to their vast online resources that encourage interactive projects like this. I referenced <u><a href="https://www.bareconductive.com/blogs/resources/make-a-basic-capacitive-sensor-with-electric-paint-and-arduino">this tutorial</a></u> to start my setup and testing period.</div>
                <div className="grid-item content">I had a few questions during my testing phase in order to ensure that my painting would not pose any issues with sending a signal to the microcontroller.</div>
                
                <div className="grid-item content"><strong>(1) Can electric paint overlapping with regular paint still send a signal? </strong></div>
                <div className="grid-item content">Hypothesis: If regular paint merely touches or overlaps with the edges of the electric paint area on the canvas, it should not significantly affect the conductivity of the electric paint. Regular paint is non-conductive, so it doesn't interfere with the electric current flowing through the electric paint.</div>

                <div className="grid-item content"><strong>(2) I have 2 separate areas of electric paint. and I connect them with regular paint. Does this become one single conductive area? In other words, will the wire detect the entire paint section as a single section, or will 2 wires be able to detect the two separate points of electric paint?</strong></div>
                <div className="grid-item content">Hypothesis: Regular paint is non-conductive, meaning it doesn't allow electricity to pass through it. If regular paint is touching two separate areas of electric paint, it should not bridge the gap and make them appear as one conductive area to the microcontroller.</div>

                <div className="grid-item content"><strong>(3) Will electric paint that is layered on top of acrylic paint disrupt the signal?</strong></div>
                <div className="grid-item content">Hypothesis: Since the two paints might mix, this might reduce the conductivity of the electric paint, but it shouldn’t completely disrupt the signal. </div>
            </div>

            <div className="half-grid">
                <div className="left-container"><img src={signal_test} alt="Testing various paint combinations"/> </div>
                <div className="right-container"><div>{project.test}</div></div>

                <div className="left-container"><img src={basic_circuit} alt="Basic circuit design"/></div>
                <div className="right-container"><div>{project.basic_circuit}</div></div>
                
                <div className="left-container"><video src={serial_monitor} controls alt="Video of serial monitor responding to touch sensor">Your browser does not support the video tag.</video></div>
                <div className="right-container">
                    <div>{project.serial_monitor_test}</div>
                    <div>{project.serial_monitor_test2}</div>
                </div>
        
            </div>




        </div>
    );
}

export default Marceline;