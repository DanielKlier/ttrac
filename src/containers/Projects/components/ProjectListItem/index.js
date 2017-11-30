import React from 'react';
import PropTypes from 'prop-types';
import './Styles.css';
import DeleteButton from '../../../../components/DeleteButton';
import {noop} from 'lodash';
import ProjectTitle from './ProjectTitle';
import ProjectCode from './ProjectCode';
import ProjectColor from './ProjectColor';

function ProjectListItem(props) {
    return (
        <div className="project-list-item">
            <ProjectCode>{props.project.code}</ProjectCode>
            <ProjectColor color={props.project.color}/>
            <ProjectTitle>{props.project.title}</ProjectTitle>
            <span className="buttons">
                <DeleteButton onClick={() => props.onDeleteProject(props.project.id)}/>
            </span>
        </div>
    );
}

ProjectListItem.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.string, title: PropTypes.string
    }),
    onDeleteProject: PropTypes.func
};

ProjectListItem.defaultProps = {
    onDeleteProject: noop
};

export default ProjectListItem;
