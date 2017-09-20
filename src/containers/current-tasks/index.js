import React from 'react';
import {connect} from 'react-redux';
import {ListGroup} from 'react-bootstrap';
import TaskListItem from './TaskListItem';
import './task-list.css';
import AddNewTaskItem from './AddNewTaskItem';
import {
    createNewTask,
    deleteTask,
    setTaskTitle,
    startTaskProgress,
    stopTaskProgress
} from '../../actions/';

const CurrentTasks = props => (
    <div>
        <h1>Time Tracking</h1>
        <ListGroup componentClass="ul">
            {
                props.currentTasks.map(t => (
                    <TaskListItem {...t}
                                  key={t.id}
                                  taskIsRunning={
                                      !!props.runningTask &&
                                      t.id === props.runningTask.taskId
                                  }
                                  runningTask={props.runningTask}
                                  onTaskTitleChanged={title =>
                                      props.onTaskTitleChanged(t.id, title)
                                  }
                                  onStartProgressClicked={() =>
                                      props.onStartProgressClicked(t.id)
                                  }
                                  onStopProgressClicked={() =>
                                      props.runningTask &&
                                      props.onStopProgressClicked(
                                          t.id, props.runningTask.startDate
                                      )
                                  }
                                  onDeleteTaskClicked={() =>
                                      props.onDeleteTaskClicked(t.id)
                                  }
                    />
                ))
            }
            <AddNewTaskItem
                onClick={() => props.onAddNewTaskClick()}/>
        </ListGroup>
    </div>
);

const mapStateToProps = ({app}) => ({
    currentTasks: app.tasks.allIds.map((id) => {

        const task        = app.tasks.byId[id];
        const elapsedTime = (app.timeLogs.byTaskId[id] || [])
            .map(logId => app.timeLogs.byId[logId])
            .reduce((time, log) => time + log.stopDate - log.startDate, 0);

        return {
            ...task,
            elapsedTime
        };
    }),
    runningTask : app.runningTask
});

const mapDispatchToProps = dispatch => ({
    onAddNewTaskClick     : () => dispatch(createNewTask()),
    onTaskTitleChanged    : (taskId, text) => dispatch(
        setTaskTitle(taskId, text)),
    onStartProgressClicked: (taskId) => dispatch(startTaskProgress(taskId)),
    onStopProgressClicked : (taskId, startDate) => dispatch(
        stopTaskProgress(taskId, startDate)
    ),
    onDeleteTaskClicked   : (taskId) => dispatch(deleteTask(taskId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentTasks);
