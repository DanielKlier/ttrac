import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import {noop} from 'lodash';
import {Button, Glyphicon, Overlay, Popover} from 'react-bootstrap';
import FindProjectDialog from '../../../components/FindProjectDialog/index';
import uuid from 'uuid';

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
            <div>
                <Button ref={ref => this.openPopoverTarget = ref} onClick={() => this.toggleOpen()}>
                    {this.renderProject()}
                </Button>
                <Overlay target={props => findDOMNode(this.openPopoverTarget)}
                         show={this.state.isOpen} placement="bottom" rootClose
                         onHide={() => this.toggleOpen(false)}>
                    <Popover id={this.id}>
                        <FindProjectDialog onSelectProject={this.props.onProjectChanged}/>
                    </Popover>
                </Overlay>
            </div>
        );
    }

    renderProject() {
        if (this.props.project) {
            return (
                <span>{this.props.project.title}</span>
            );
        }
        else {
            return (
                <Glyphicon glyph="folder-close"/>
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
