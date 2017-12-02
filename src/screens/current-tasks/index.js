import React from 'react';
import PropTypes from 'prop-types';
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
import {identity} from 'lodash';
import {setTaskProject} from '../../actions/index';

export const CurrentTasks = props => (
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
                                  onProjectChanged={project =>
                                      props.onTaskProjectChanged(t.id, project.id)
                                  }
                    />
                ))
            }
            <AddNewTaskItem
                onClick={() => props.onAddNewTaskClick()}/>
        </ListGroup>
    </div>
);

CurrentTasks.propTypes = {
    currentTasks: PropTypes.array,
    runningTask: PropTypes.oneOfType([
        PropTypes.shape({
            taskId: PropTypes.string,
            startDate: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(Date)])
        })
    ]),
    onAddNewTaskClick: PropTypes.func,
    onTaskTitleChanged: PropTypes.func,
    onStartProgressClicked: PropTypes.func,
    onStopProgressClicked: PropTypes.func,
    onDeleteTaskClicked: PropTypes.func,
    onTaskProjectChanged: PropTypes.func
};

CurrentTasks.defaultProps = {
    currentTasks: [],
    runningTask: null,
    onAddNewTaskClick: identity,
    onTaskTitleChanged: identity,
    onStartProgressClicked: identity,
    onStopProgressClicked: identity,
    onDeleteTaskClicked: identity,
    onTaskProjectChanged: identity
};

export const mapStateToProps = (state) => ({
    currentTasks: getCurrentTasks(state).map(task => {

        const elapsedTime = (task.timeLogIds || [])
            .map(logId => state.app.timeLogs.byId[logId])
            .reduce((time, log) => time + log.stopDate - log.startDate, 0);

        return {
            ...task,
            project: state.app.projects.byId[task.projectId],
            elapsedTime
        };
    }),
    runningTask: state.app.runningTask
});

export const mapDispatchToProps = dispatch => ({
    onAddNewTaskClick: () => dispatch(createNewTask()),
    onTaskTitleChanged: (taskId, text) => dispatch(
        setTaskTitle(taskId, text)),
    onStartProgressClicked: (taskId) => dispatch(startTaskProgress(taskId, Date.now())),
    onStopProgressClicked: (taskId, startDate) => dispatch(
        stopTaskProgress(taskId, startDate, Date.now())
    ),
    onDeleteTaskClicked: (taskId) => dispatch(deleteTask(taskId)),
    onTaskProjectChanged: (taskId, projectId) => dispatch(setTaskProject(taskId, projectId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentTasks);
