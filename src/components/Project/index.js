import React from "react";

function Project({proj}) {
    return (
        <div>
            <h5>{proj.title}</h5>
            <img src={proj.image}></img>
            <a href={proj.github}>GitHub</a>
            <a href={proj.livelink}>Live Link</a>
        </div>
    );
}

export default Project