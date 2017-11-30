import React from 'react';
import PropTypes from 'prop-types';
import ColorButton from '../../../../components/ColorButton/index';

function ProjectColor(props) {
    return (
        <ColorButton color={props.color} disabled={true}/>
    );
}

ProjectColor.propTypes    = {
    color: PropTypes.string.isRequired
};

export default ProjectColor;
