import React from 'react';
import PropTypes from 'prop-types';
import {Button, Glyphicon} from 'react-bootstrap';
import {noop} from 'lodash';

const DeleteButton = props => (
    <Button onClick={() => typeof props.onClick === 'function' && props.onClick()}>
        <Glyphicon glyph="trash"/>
    </Button>
);

DeleteButton.propTypes = {
    onClick: PropTypes.func
};

DeleteButton.defaultProps = {
    onClick: noop
};

export default DeleteButton;
