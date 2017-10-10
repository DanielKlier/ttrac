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
import getCurrentTasks from '../../selectors/tasks/getCurrentTasks';

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

const mapStateToProps = (state) => ({
    currentTasks: getCurrentTasks(state).map(task => {

        const elapsedTime = (task.timeLogIds || [])
            .map(logId => state.app.timeLogs.byId[logId])
            .reduce((time, log) => time + log.stopDate - log.startDate, 0);

        return {
            ...task,
            elapsedTime
        };
    }),
    runningTask : state.app.runningTask
});

const mapDispatchToProps = dispatch => ({
    onAddNewTaskClick     : () => dispatch(createNewTask()),
    onTaskTitleChanged    : (taskId, text) => dispatch(
        setTaskTitle(taskId, text)),
    onStartProgressClicked: (taskId) => dispatch(startTaskProgress(taskId, Date.now())),
    onStopProgressClicked : (taskId, startDate) => dispatch(
        stopTaskProgress(taskId, startDate, Date.now())
    ),
    onDeleteTaskClicked   : (taskId) => dispatch(deleteTask(taskId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentTasks);
