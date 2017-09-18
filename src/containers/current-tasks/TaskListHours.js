import * as React from 'react';
import {Label} from 'react-bootstrap';
import moment from 'moment';
import 'moment-duration-format';

export default props => (
    <span className="task-list-hours">
      <Label bsStyle="info">
          {

              moment.duration(props.elapsedTime).format(
                  (props.elapsedTime > 60 * 60 * 1000) ?
                  'h[h] m[m]' : 'm[m] s[s]'
              )
          }
      </Label>
    </span>
)