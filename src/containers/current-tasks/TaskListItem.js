import * as React from 'react';
import TaskListHours from './TaskListHours';
import TaskListIssue from './TaskListIssue';
import TaskListShortDescription from './TaskListShortDescription';
import {Button, Glyphicon} from 'react-bootstrap';

export default props => (
    <li className="list-group-item task-list-item">
        <div className="task-list-item-badges">
            <TaskListHours hours={props.hours} className="pull-left"/>
            {props.issue && <TaskListIssue issue={props.issue}/>}
        </div>
        <div className="task-list-item-main">
            <TaskListShortDescription description={props.description}/>
        </div>
        <div className="task-list-item-buttons">
            <Button>
                <Glyphicon glyph="time"/>
            </Button>
        </div>
    </li>
);