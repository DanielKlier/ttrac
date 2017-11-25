import * as React from 'react';
import PropTypes from 'prop-types';

const TaskListIssue = props => (
    <span className="task-list-issue">
      <a href="/">{props.issue}</a>
    </span>
);

TaskListIssue.propTypes = {
    issue: PropTypes.string
};

export default TaskListIssue;
