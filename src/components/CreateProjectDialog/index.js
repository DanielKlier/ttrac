import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {noop} from 'lodash';
import {Button, Modal} from 'react-bootstrap';
import FieldGroup from '../Forms/FieldGroup';
import {connect} from 'react-redux';
import getProjects from '../../selectors/projects/getProjects';
import {createProject} from '../../actions/index';

class CreateProjectDialog extends Component {

    constructor() {
        super();

        this.state = {
            title: ''
        };
    }

    reset() {
        this.setState({
            title: ''
        });
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.cancel}>
                <Modal.Header closeButton={true}>
                    <Modal.Title>Create new project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={e => {
                        e.preventDefault();
                        this.complete();
                    }}>
                        <FieldGroup id="createProjectName" label="Project name" type="text"
                                    value={this.state.title}
                                    onChange={e => this.updateTitle(e.target.value)}/>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="default" onClick={this.cancel}>Cancel</Button>
                    <Button bsStyle="primary" onClick={this.complete}>Create</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    cancel = () => {
        this.props.onCancel();
        this.reset();
    };

    complete = () => {
        this.reset();
        this.props.createProject({
            title: this.state.title
        });
        this.props.onComplete();
    };

    updateTitle = title => {
        this.setState({title});
    };
}

CreateProjectDialog.propTypes = {
    onComplete: PropTypes.func,
    onCancel: PropTypes.func,
    show: PropTypes.bool,
    createProject: PropTypes.func
};

CreateProjectDialog.defaultProps = {
    onComplete: noop,
    onCancel: noop,
    createProject: noop,
    show: false
};

function mapStateToProps(state) {
    return {
        existingProjects: getProjects(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createProject: data => dispatch(createProject(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectDialog);
