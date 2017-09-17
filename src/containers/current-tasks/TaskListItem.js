import * as React from 'react';
import TaskListHours from './TaskListHours';
import TaskListIssue from './TaskListIssue';
import {Button, Glyphicon} from 'react-bootstrap';
import TaskListTitle from './TaskListTitle';

export default props => (
    <li className="list-group-item task-list-item">
        <div className="task-list-item-badges">
            <TaskListHours hours={props.elapsedTime} className="pull-left"/>
            {props.jiraIssue && <TaskListIssue jiraIssue={props.jiraIssue}/>}
        </div>
        <div className="task-list-item-main">
            <TaskListTitle title={props.title}
                           onTextChanged={
                               text => props.onTaskTitleChanged(text)
                           }/>
        </div>
        <div className="task-list-item-buttons">
            <Button>
                <Glyphicon glyph="time"/>
            </Button>
        </div>
    </li>
);