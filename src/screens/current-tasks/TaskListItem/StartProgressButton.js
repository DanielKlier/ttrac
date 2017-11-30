import React from 'react';
import PropTypes from 'prop-types';
import {Button, Glyphicon} from 'react-bootstrap';
import {noop} from 'lodash';

const StartProgressButton = props => (
    <Button onClick={() => props.onClick()}>
        <Glyphicon glyph="time"/>
    </Button>
);

StartProgressButton.propTypes = {
    onClick: PropTypes.func
};

StartProgressButton.defaultProps = {
    onClick: noop
};

export default StartProgressButton;
