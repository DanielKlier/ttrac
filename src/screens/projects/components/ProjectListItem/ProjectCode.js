import React from 'react';
import {Label} from 'react-bootstrap';

function ProjectCode(props) {
    return (
        <h4 className="project-code"><Label>{props.children}</Label></h4>
    );
}

export default ProjectCode;
