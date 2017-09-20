import * as React from 'react';
import PropTypes from 'prop-types';
import TaskListHours from './TaskListHours';
import TaskListIssue from './TaskListIssue';
import {Button, Glyphicon} from 'react-bootstrap';
import TaskListTitle from './TaskListTitle';
import TimeCounter from './TimeCounter';

class TaskListItem extends React.PureComponent {
    // noinspection JSUnusedGlobalSymbols
    static PropTypes = {
        elapsedTime           : PropTypes.number,
        jiraIssue             : PropTypes.string,
        title                 : PropTypes.string,
        taskIsRunning         : PropTypes.bool,
        runningTask           : PropTypes.object,
        onTaskTitleChanged    : PropTypes.func.isRequired,
        onStartProgressClicked: PropTypes.func.isRequired,
        onStopProgressClicked : PropTypes.func.isRequired,
        onDeleteTaskClicked   : PropTypes.func.isRequired
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
                <div className="task-list-item-main">
                    <TaskListTitle title={props.title}
                                   onTextChanged={
                                       text => props.onTaskTitleChanged(text)
                                   }/>
                </div>
                <div className="task-list-item-buttons">
                    <Button onClick={() => props.onDeleteTaskClicked()}>
                        <Glyphicon glyph="trash"/>
                    </Button>
                    {props.taskIsRunning === false &&
                    <Button onClick={() => props.onStartProgressClicked()}>
                        <Glyphicon glyph="time"/>
                    </Button>
                    }
                    {props.taskIsRunning === true &&
                    <Button onClick={() => props.onStopProgressClicked()}>
                        <Glyphicon glyph="pause"/>
                    </Button>
                    }
                </div>
            </li>
        );
    }
}

export default TaskListItem;
