import React from 'react';
import PropTypes from 'prop-types';
import {Button, Glyphicon} from 'react-bootstrap';

const StartProgressButton = props => (
    <Button onClick={() => props.onClick()}>
        <Glyphicon glyph="time"/>
    </Button>
);

StartProgressButton.propTypes = {
    onClick: PropTypes.func
};

export default StartProgressButton;
