import React from 'react';
import {connect} from 'react-redux';
import {ListGroup} from 'react-bootstrap';
import TaskListItem from './TaskListItem';
import './task-list.css';
import AddNewTaskItem from './AddNewTaskItem';
import {
    createNewCurrentTask,
    setTaskTitle,
    startTaskProgress,
    stopTaskProgress
} from '../../actions/currentTasks';

const CurrentTasks = props => (
    <div>
        <h1>Time Tracking</h1>
        <ListGroup componentClass="ul">
            {
                props.currentTasks.map(t => (
                    <TaskListItem {...t}
                                  key={t.uuid}
                                  taskIsRunning={t.uuid === props.runningTask}
                                  onTaskTitleChanged={title =>
                                      props.onTaskTitleChanged(t.uuid, title)
                                  }
                                  onStartProgressClicked={() =>
                                      props.onStartProgressClicked(t.uuid)
                                  }
                                  onStopProgressClicked={() =>
                                      props.onStopProgressClicked(t.uuid)
                                  }
                    />
                ))
            }
            <AddNewTaskItem
                onClick={() => props.onAddNewTaskClick()}/>
        </ListGroup>
    </div>
);

const mapStateToProps = ({tasks}) => ({
    currentTasks: tasks.currentTasks.map((id) => tasks.byId[id]),
    runningTask : tasks.runningTask
});

const mapDispatchToProps = dispatch => ({
    onAddNewTaskClick     : () => dispatch(createNewCurrentTask()),
    onTaskTitleChanged    : (taskId, text) => dispatch(
        setTaskTitle(taskId, text)),
    onStartProgressClicked: (taskId) => dispatch(startTaskProgress(taskId)),
    onStopProgressClicked : (taskId) => dispatch(stopTaskProgress(taskId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentTasks);
