import React from 'react';
import {connect} from 'react-redux';
import {ListGroup} from 'react-bootstrap';
import TaskListItem from './TaskListItem';
import './task-list.css';
import AddNewTaskItem from './AddNewTaskItem';
import {createNewCurrentTask, setTaskTitle} from '../../actions/currentTasks';

const CurrentTasks = props => (
    <div>
        <h1>Time Tracking</h1>
        <ListGroup componentClass="ul">
            {
                props.currentTasks.map(t => (
                    <TaskListItem {...t} onTaskTitleChanged={
                        title => props.onTaskTitleChanged(
                            t.uuid, title)} key={t.uuid}/>
                ))
            }
            <AddNewTaskItem
                onClick={() => props.onAddNewTaskClick()}/>
        </ListGroup>
    </div>
);

const mapStateToProps = ({tasks}) => ({
    currentTasks: tasks.currentTasks.map((id) => tasks.byId[id])
});

const mapDispatchToProps = dispatch => ({
    onAddNewTaskClick : () => dispatch(createNewCurrentTask()),
    onTaskTitleChanged: (taskId, text) => dispatch(setTaskTitle(taskId, text))
});

/*
<TaskListItem elapsedTime={4800000} jiraIssue="BFI-212"
                          title="Fehlersuche"
                          onTaskTitleChanged={title => props.onTaskTitleChanged(
                              1,
                              title
                          )}/>
 */

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentTasks);
