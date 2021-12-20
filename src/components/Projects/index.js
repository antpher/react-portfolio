import React from "react";
import Project from '../Project'

function Projects() {
    const projectInfo = [
        {
            title: 'Run Buddy',
            image: '',
            github: 'https://github.com/antpher/run-buddy',
            livelink: 'https://antpher.github.io/run-buddy/'
        },
        {
            title: 'Robot Gladiators',
            image: '',
            github: 'https://github.com/antpher/robot-gladiators',
            livelink: 'https://antpher.github.io/robot-gladiators/'
        },
        {
            title: 'Food Festival',
            image: '',
            github: 'https://github.com/antpher/food-festival',
            livelink: 'https://antpher.github.io/food-festival/'
        },
        {
            title: 'Taskmaster Pro',
            image: '',
            github: 'https://github.com/antpher/taskmaster-pro',
            livelink: 'https://antpher.github.io/taskmaster-pro/'
        },
    ]
    
    return (
        <div>
            <h1>Projects</h1>
            {projectInfo.map(proj => (
               <Project proj={proj}/>
            ))}
        </div>
    );
}

export default Projects