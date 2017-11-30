import React from 'react';
import PropTypes from 'prop-types';
import {noop} from 'lodash';
import {Button} from 'react-bootstrap';
import './Styles.css';

function ColorButton(props) {

    let wrapperClass = 'color-button';

    if (props.isSelected) {
        wrapperClass += ' selected';
    }

    return (
        <div className={wrapperClass}>
            <Button onClick={() => props.onClick(props.color)} disabled={props.disabled}>
                <div className="color-tile" style={{backgroundColor: props.color}}/>
            </Button>
        </div>
    );
}

ColorButton.propTypes = {
    color: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};

ColorButton.defaultProps = {
    color: '#555555',
    isSelected: false,
    onClick: noop,
    disabled: false
};

export default ColorButton;
