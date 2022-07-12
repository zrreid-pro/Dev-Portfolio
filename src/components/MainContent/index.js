import React from 'react';
import './MainContent.scss';

export default function MainContent() {
    return (
        <div className='main-content'>
            <div className='content-panel'>
                <h1>Zachary Reid</h1>
                <h3>Full-Stack Software Engineer</h3>
                <p>This is the profile section where I'll talk a little about myself and my career. 
                    It'll include a downloadable link to a pdf of my resume, a decent looking photo of myself, and links to 
                    my github and linkedin profiles.
                </p>
            </div>
            <div className='content-panel'>
                <h1>Skills</h1>
                <p>This is where I'll talk about my skills. 
                    It'll include the length of time I've been working with each language and probably how
                     I've trained each of my soft skills.</p>
            </div>
            <div className='content-panel'>
                <h1>Projects</h1>
                <p>This is where I'll display the projects I've done as well as detail my general experience. 
                    It will feature 3 projects that I'm most proud of or are the most relavant to what the user is looking for. 
                    The total list of projects will be searchable by the languages that were used to create them if a user wants to see more. 
                    There will be some for of demo available for the user with a link to the github repo as well.
                </p>
            </div>
            <div className='content-panel'>
                <h1>Contact</h1>
                <p>This is the contact section where I'll have a form available for a user to write me an email. 
                    Submitting the form will send an email to my account with the contents that they wrote out.
                </p>
            </div>
        </div>
    );
}