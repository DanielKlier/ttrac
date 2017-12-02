import * as React from 'react';
import PropTypes from 'prop-types';
import './Styles.css';

const TaskListIssue = props => (
    <span className="task-list-issue">
      <a href="/">{props.issue}</a>
    </span>
);

TaskListIssue.propTypes = {
    issue: PropTypes.string
};

TaskListIssue.defaultProps = {
    issue: ''
};

export default TaskListIssue;
