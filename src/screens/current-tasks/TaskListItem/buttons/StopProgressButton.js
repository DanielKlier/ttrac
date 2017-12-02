import React from 'react';
import PropTypes from 'prop-types';
import {Button, Glyphicon} from 'react-bootstrap';
import {noop} from 'lodash';

const StopProgressButton = props => (
    <Button onClick={() => props.onClick()}>
        <Glyphicon glyph="pause"/>
    </Button>
);

StopProgressButton.propTypes = {
    onClick: PropTypes.func
};

StopProgressButton.defaultProps = {
    onClick: noop
};

export default StopProgressButton;
