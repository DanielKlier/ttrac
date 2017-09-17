import * as React from 'react';
import {Label} from 'react-bootstrap';

export default props => (
    <span className="task-list-hours">
      <Label bsStyle="info">{props.hours}</Label>
    </span>
)