import * as React from 'react';
import {Button, Clearfix, Glyphicon} from 'react-bootstrap';
import PropTypes from 'prop-types';

class AddNewTaskItem extends React.PureComponent {

    // noinspection JSUnusedGlobalSymbols
    static propTypes = {
        onClick: PropTypes.func
    };

    render() {
        return (
            <li className="list-group-item">
                <Clearfix>
                    <span className="add-new-task-text">Add new task</span>
                    <Button className="pull-right" bsStyle="primary"
                            onClick={() => this.props.onClick()}>
                        <Glyphicon glyph="plus"/>
                    </Button>
                </Clearfix>
            </li>
        )
    }
}

export default AddNewTaskItem;
