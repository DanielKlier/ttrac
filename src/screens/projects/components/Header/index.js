import React from 'react';
import PropTypes from 'prop-types';
import {identity} from 'lodash';
import {Button} from 'react-bootstrap';
import './Styles.css';

function Header(props) {
    return (
        <h1>
            <span>Projects</span>
            <Button onClick={props.onCreateNew} bsStyle="primary" className="create-new-button">
                Create new
            </Button>
        </h1>
    );
}

Header.propTypes    = {
    project: PropTypes.object,
    onCreateNew: PropTypes.func
};
Header.defaultProps = {
    project: {},
    onCreateNew: identity
};

export default Header;
