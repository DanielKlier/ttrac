import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Col,
    ControlLabel,
    Form,
    FormControl,
    FormGroup,
    HelpBlock,
    Modal,
    Row
} from 'react-bootstrap';
import {connect} from 'react-redux';
import {noop, range, first} from 'lodash';
import getProjects from '../../selectors/projects/getProjects';
import {createProject} from '../../actions/index';
import ColorPicker from '../ColorPicker/index';
import colorConverter from 'color-convert';

function makeColors(numColors) {
    const stepSize = 1 / (16);

    return range(numColors).map(i => {
        const h = Math.round((i * stepSize * 360) % 360);
        const s = 25
            + Math.floor((i % 64) / 16) * 25
            + Math.floor((i % 32) / 32) * 25
            + Math.floor((i % 16) / 48) * 25;
        const l = 50;

        return '#' + colorConverter.hsl.hex(h, s, l);
    });
}

export class CreateProjectDialog extends Component {

    constructor() {
        super();

        this.colorPalette = makeColors(64);

        this.state = this.defaultState = {
            formValid: false,
            title: '',
            titleValid: false,
            titleHelp: '',
            code: '',
            codeValid: false,
            codeHelp: '',
            color: first(this.colorPalette)
        };
    }

    componentDidMount() {
        this.validateForm();
    }

    reset() {
        this.setState(this.defaultState);
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.cancel}>
                <Modal.Header closeButton={true}>
                    <Modal.Title>Create new project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={e => {
                        e.preventDefault();
                        this.complete();
                    }}>
                        <FormGroup controlId="createProjectName"
                                   validationState={this.getTitleValidationState()}>
                            <ControlLabel>Project Name</ControlLabel>
                            <FormControl type="text" value={this.state.title}
                                         placeholder="Enter a project name"
                                         onChange={e => this.updateTitle(e.target.value)}/>
                            {this.state.titleHelp &&
                            <HelpBlock>{this.state.titleHelp}</HelpBlock>
                            }
                        </FormGroup>
                        <Row>
                            <Col sm={2}>
                                <FormGroup controlId="createProjectCode"
                                           validationState={this.getCodeValidationState()}>
                                    <ControlLabel>Code</ControlLabel>
                                    <FormControl type="text" value={this.state.code} maxLength={4}
                                                 placeholder="ABC"
                                                 onChange={e => this.updateCode(e.target.value)}/>
                                    {this.state.codeHelp &&
                                    <HelpBlock>{this.state.codeHelp}</HelpBlock>
                                    }
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="createProjectColor">
                                    <ControlLabel>Color</ControlLabel>
                                    <ColorPicker colorPalette={this.colorPalette}
                                                 value={this.state.color}
                                                 onChange={this.updateColor}/>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="default" onClick={this.cancel}>Cancel</Button>
                    <Button bsStyle="primary" disabled={!this.state.formValid}
                            onClick={this.complete}>
                        Create
                    </Button>
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
            title: this.state.title,
            code: this.state.code,
            color: this.state.color
        });
        this.props.onComplete();
    };

    validateForm() {

        // Validate title
        let titleValid = true;
        let titleHelp  = '';

        if (!this.state.title.length) {
            titleValid = false;

        }
        else if (this.props.existingProjects.find(
                p => p.title.toLowerCase() === this.state.title.toLowerCase())
        ) {
            titleHelp  = 'Project already exists';
            titleValid = false;
        }

        // Validate code
        let codeValid = true;
        let codeHelp  = '';

        if (!this.state.code.length) {
            codeValid = false;
        }
        else if (this.props.existingProjects.find(
                p => p.code.toLowerCase() === this.state.code.toLowerCase())
        ) {
            codeHelp  = 'Must be unique';
            codeValid = false;
        }

        this.setState({
            titleValid, titleHelp,
            codeValid, codeHelp,
            formValid: titleValid && codeValid
        });
    }

    updateTitle = title => {
        this.setState({title}, this.validateForm);
    };

    getTitleValidationState() {
        if (this.state.titleValid || this.state.title.length === 0) {
            return null;
        }
        else {
            return 'error';
        }
    }

    getCodeValidationState() {
        if (this.state.codeValid || this.state.code.length === 0) {
            return null;
        }
        else {
            return 'error';
        }
    }

    updateCode = code => {
        this.setState({code}, this.validateForm);
    };

    updateColor = color => {
        this.setState({color}, this.validateForm);
    };
}

CreateProjectDialog.propTypes = {
    onComplete: PropTypes.func,
    onCancel: PropTypes.func,
    show: PropTypes.bool,
    createProject: PropTypes.func,
    existingProjects: PropTypes.array
};

CreateProjectDialog.defaultProps = {
    onComplete: noop,
    onCancel: noop,
    createProject: noop,
    show: false
};

function mapStateToProps(state) {
    console.log(state);
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
