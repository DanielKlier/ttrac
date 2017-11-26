import * as React from 'react';
import PropTypes from 'prop-types';
import {ControlLabel, FormControl, FormGroup, HelpBlock} from 'react-bootstrap';

function FieldGroup({id, label, help, validationState, ...props}) {
    return (
        <FormGroup controlId={id} validationState={validationState}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

FieldGroup.propTypes = {
    //...FormControl.propTypes,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    help: PropTypes.string,
    validationState: PropTypes.oneOf(['success', 'warning', 'error', null]),
};

FieldGroup.defaultProps = {
    help: '',
    validationState: null
};

export default FieldGroup;
