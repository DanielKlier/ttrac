import React from 'react';
import PropTypes from 'prop-types';
import './Styles.css';
import DeleteButton from '../../../../components/DeleteButton';
import {noop} from 'lodash';

function ProjectListItem(props) {
    return (
        <div className="project-list-item">
            <span>{props.project.title}</span>
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
