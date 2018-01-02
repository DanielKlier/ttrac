import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import {noop} from 'lodash';
import {Button, Glyphicon, Label, Overlay, Popover} from 'react-bootstrap';
import FindProjectDialog from '../../../../components/FindProjectDialog/index';
import uuid from 'uuid';
import './Styles.css';

class TaskListProject extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false
        };

        this.id = 'FindProjectDialog_' + uuid();

        this.openPopoverTarget = null;
    }

    render() {
        return (
            <div className="task-list-project">
                <div ref={ref => this.openPopoverTarget = ref} onClick={() => this.toggleOpen()}>
                    {this.renderProject()}
                </div>
                <Overlay target={props => findDOMNode(this.openPopoverTarget)}
                         show={this.state.isOpen} placement="bottom"
                         onHide={() => this.toggleOpen(false)}>
                    <Popover id={this.id}>
                        <FindProjectDialog onSelectProject={this.onProjectChanged}/>
                    </Popover>
                </Overlay>
            </div>
        );
    }

    renderProject() {
        if (this.props.project) {
            return (
                <div className="task-list-project-inner">
                    <Label style={{backgroundColor: this.props.project.color}}>
                        {this.props.project.code}
                    </Label>
                    <span className="project-title">{this.props.project.title}</span>
                </div>
            );
        }
        else {
            return (
                <div className="add-project-button"><Button><Glyphicon glyph="folder-close"/></Button></div>
            );
        }
    }

    toggleOpen = (isOpen) => {
        // Toggle semantics
        if (isOpen === undefined) {
            isOpen = !this.state.isOpen;
        }

        this.setState({isOpen});
    };

    onProjectChanged = (project) => {
        this.toggleOpen(false);
        this.props.onProjectChanged(project);
    };
}

TaskListProject.propTypes = {
    project: PropTypes.object,
    onProjectChanged: PropTypes.func
};

TaskListProject.defaultProps = {
    project: null,
    onProjectChanged: noop
};

export default TaskListProject;
