import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import getProjects from '../../selectors/projects/getProjects';
import ProjectList from './components/ProjectList/index';
import Header from './components/Header/index';
import CreateProjectDialog from '../../components/CreateProjectDialog/index';
import './Styles.css';
import {noop} from 'lodash';
import {deleteProject} from '../../actions/index';

export class Projects extends Component {

    static propTypes = {
        projects: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            timestamp: PropTypes.number
        })),
        deleteProject: PropTypes.func
    };

    static defaultProps = {
        projects: [],
        deleteProject: noop
    };

    constructor() {
        super();

        this.state = {
            showCreateDialog: false
        };
    }

    render() {
        return (
            <div>
                <Header onCreateNew={this.showCreateDialog}/>
                <section>
                    <ProjectList projects={this.props.projects}
                                 deleteProject={this.props.deleteProject}/>
                </section>
                <CreateProjectDialog show={this.state.showCreateDialog}
                                     onCancel={this.hideCreateDialog}
                                     onComplete={this.hideCreateDialog}/>
            </div>
        );
    }

    showCreateDialog = () => {
        this.setState({showCreateDialog: true});
    };

    hideCreateDialog = () => {
        this.setState({showCreateDialog: false});
    };

    createNewProject = () => {
        this.hideCreateDialog();
    };
}

function mapStateToProps(state) {
    return {
        projects: getProjects(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        deleteProject: id => dispatch(deleteProject(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
