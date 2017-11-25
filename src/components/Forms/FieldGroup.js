import * as React from 'react';
import PropTypes from 'prop-types';
import {ControlLabel, FormControl, FormGroup, HelpBlock} from 'react-bootstrap';

function FieldGroup({id, label, help, ...props}) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

FieldGroup.propTypes = {
    id: PropTypes.string.required,
    label: PropTypes.string.required,
    help: PropTypes.string,
    ...FormControl.propTypes
};

FieldGroup.defaultProps = {
    help: ''
};

export default FieldGroup;
