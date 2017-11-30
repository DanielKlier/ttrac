import * as React from 'react';
import PropTypes from 'prop-types';
import ProjectListItem from '../ProjectListItem/index';
import {ListGroup} from 'react-bootstrap';
import {noop} from 'lodash';

function ProjectList(props) {
    return (
        <ListGroup componentClass="ul" className="project-list">
            {props.projects.map(project => (
                <li key={project.id} className="list-group-item">
                    <ProjectListItem project={project} onDeleteProject={props.deleteProject}/>
                </li>
            ))}
        </ListGroup>
    );
}

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        timestamp: PropTypes.number
    })),
    deleteProject: PropTypes.func
};

ProjectList.defaultProps = {
    projects: [],
    deleteProject: noop
};

export default ProjectList;
