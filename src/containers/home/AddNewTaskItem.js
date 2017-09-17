import * as React from 'react';
import {Button, Clearfix, Glyphicon} from 'react-bootstrap';

export default () => (
    <li className="list-group-item">
      <Clearfix>
        <span className="add-new-task-text">Add new task</span>
        <Button className="pull-right" bsStyle="primary">
          <Glyphicon glyph="plus"/>
        </Button>
      </Clearfix>
    </li>
)