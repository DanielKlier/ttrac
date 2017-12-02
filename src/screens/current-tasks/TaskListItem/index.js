import * as React from 'react';
import PropTypes from 'prop-types';
import {noop} from 'lodash';
import TaskListHours from './TaskListHours';
import TaskListIssue from './TaskListIssue';
import TaskListTitle from './TaskListTitle';
import TimeCounter from './TimeCounter';
import StartProgressButton from './StartProgressButton';
import StopProgressButton from './StopProgressButton';
import DeleteButton from '../../../components/DeleteButton';
import TaskListProject from './TaskListProject';

class TaskListItem extends React.PureComponent {
    // noinspection JSUnusedGlobalSymbols
    static propTypes = {
        elapsedTime: PropTypes.number,
        jiraIssue: PropTypes.string,
        title: PropTypes.string,
        taskIsRunning: PropTypes.bool,
        runningTask: PropTypes.object,
        onTaskTitleChanged: PropTypes.func,
        onStartProgressClicked: PropTypes.func,
        onStopProgressClicked: PropTypes.func,
        onDeleteTaskClicked: PropTypes.func,
        project: PropTypes.object,
        onProjectChanged: PropTypes.func
    };

    // noinspection JSUnusedGlobalSymbols
    static defaultProps = {
        elapsedTime: 0,
        jiraIssue: '',
        title: '',
        taskIsRunning: false,
        runningTask: null,
        onTaskTitleChanged: noop,
        onStartProgressClicked: noop,
        onStopProgressClicked: noop,
        onDeleteTaskClicked: noop,
        project: null,
        onProjectChanged: noop
    };

    render() {
        const props      = this.props;
        const classNames = [
            'list-group-item',
            'task-list-item'
        ];
        if (props.taskIsRunning) {
            classNames.push('running');
        }
        const className = classNames.join(' ');

        return (
            <li className={className}>
                <div className="task-list-item-badges">
                    {props.taskIsRunning &&
                    <TimeCounter startDate={props.runningTask.startDate}/>
                    }
                    {!props.taskIsRunning &&
                    <TaskListHours elapsedTime={props.elapsedTime}
                                   className="pull-left"/>
                    }
                    {props.jiraIssue &&
                    <TaskListIssue jiraIssue={props.jiraIssue}/>}
                </div>
                <div className="task-list-item-project">
                    <TaskListProject project={props.project}
                                     onProjectChanged={props.onProjectChanged}/>
                </div>
                <div className="task-list-item-main">
                    <TaskListTitle title={props.title}
                                   onTextChanged={
                                       text => props.onTaskTitleChanged(text)
                                   }/>
                </div>
                <div className="task-list-item-buttons">
                    <DeleteButton onClick={() => props.onDeleteTaskClicked()}/>
                    {props.taskIsRunning === false &&
                    <StartProgressButton onClick={() => props.onStartProgressClicked()}/>
                    }
                    {props.taskIsRunning === true &&
                    <StopProgressButton onClick={() => props.onStopProgressClicked()}/>
                    }
                </div>
            </li>
        );
    }
}

export default TaskListItem;
