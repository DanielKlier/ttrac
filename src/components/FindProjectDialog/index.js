import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {noop} from 'lodash';
import ColorButton from '../ColorButton/index';
import SearchBox from './SearchBox';
import {connect} from 'react-redux';
import getProjects from '../../selectors/projects/getProjects';
import './Styles.css';
import {CreateProjectDialog} from '../CreateProjectDialog/index';
import {Button} from 'react-bootstrap';

class FindProjectDialog extends Component {

    constructor() {
        super();

        this.state = {
            filter: '',
            creatingNewProject: false
        };
    }

    render() {

        const self = this;

        return (
            <div className="search-project">
                <h4>Find projects</h4>
                <SearchBox query={this.state.filter}
                           onChangeQuery={v => this.setState({filter: v})}/>
                <ul className="project-list">{
                    this.filterProjects(this.props.projects).map(p => (
                        <li key={p.id} onClick={() => self.onSelectProject(p)}
                            className="find-project-list-item">
                            <ColorButton color={p.color} disabled={true} className="color-button"/>
                            <span>{p.title}</span>
                        </li>
                    ))
                }</ul>
                <div>
                    <p>Project not found?</p>
                    <Button onClick={this.showCreateDialog} bsStyle="primary">Create new</Button>
                    <CreateProjectDialog show={this.state.creatingNewProject}
                                         onComplete={this.hideCreateDialog}
                                         onCancel={this.hideCreateDialog}/>
                </div>
            </div>
        );
    }

    hideCreateDialog = () => {
        this.setState({creatingNewProject: false});
    };

    showCreateDialog = () => {
        this.setState({creatingNewProject: true});
    };

    filterProjects = (projects) => {
        const filter = this.state.filter.toLowerCase();

        return projects.filter(p => (p.title.toLowerCase().indexOf(filter) > -1));
    };

    onSelectProject = (project) => {
        this.props.onSelectProject(project);
    };
}

FindProjectDialog.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object),
    onSelectProject: PropTypes.func
};

FindProjectDialog.defaultProps = {
    projects: [],
    onSelectProject: noop
};

function mapStateToProps(state) {
    return {
        projects: getProjects(state)
    };
}

export default connect(mapStateToProps)(FindProjectDialog);
