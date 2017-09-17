import React from 'react';
import {connect} from 'react-redux';
import {ListGroup} from 'react-bootstrap';
import TaskListItem from './TaskListItem';
import './task-list.css';
import AddNewTaskItem from './AddNewTaskItem';

const CurrentTasks = props => (
    <div>
      <h1>Time Tracking</h1>
      <ListGroup componentClass="ul">
        <TaskListItem hours="1:20" issue="BFI-212" description="Fehlersuche"/>
        <TaskListItem hours="0:30" issue="BFI-212" description="Bugfixing"/>
        <TaskListItem hours="0:40" issue="BFI-278" description="BF-123 Fehlersuche"/>
        <TaskListItem hours="1:00" issue="" description="Mittagspause"/>
        <AddNewTaskItem />
      </ListGroup>
    </div>
);

export default connect(
    null,
    null,
)(CurrentTasks);
