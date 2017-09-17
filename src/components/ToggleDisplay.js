import * as React from 'react';
import PropTypes from 'prop-types';

const shouldHide = props => {
    if (props.show !== null) {
        return !props.show;
    }
    else if (props.hide !== null) {
        return !!props.hide;
    }
    else {
        return false;
    }
};

function toggleDisplay(props) {

    if (props.if === false) {
        return null;
    }

    const newProps = Object.assign({}, props);
    propsToRemove.forEach(p => {
        if (p in newProps) {
            delete newProps[p];
        }
    });

    const className = `${shouldHide(props) ? 'hidden' : ''}`;

    return (
        <span className={className}>{props.children}</span>
    );
}

toggleDisplay.PropTypes = {
    if: PropTypes.bool,
    show: PropTypes.bool,
    hide: PropTypes.bool
};

const propsToRemove = Object.keys(toggleDisplay.PropTypes);

export default toggleDisplay;
