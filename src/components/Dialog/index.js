import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Modal} from 'react-bootstrap';

class Dialog extends Component {
    render() {
        return (
            <Modal show={this.props.show}>
                <Modal.Header>
                    <Modal.Title>Create new project</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                {this.props.buttons.length &&
                <Modal.Footer>
                    {this.props.buttons.map(btn => (
                        <Button bsStyle={btn.bsStyle} onClick={btn.onClick}>{btn.text}</Button>
                    ))}
                </Modal.Footer>
                }
            </Modal>
        );
    }
}

Dialog.propTypes = {
    title: PropTypes.string,
    show: PropTypes.bool,
    buttons: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        onClick: PropTypes.func,
        bsStyle: PropTypes.string
    }))
};

Dialog.defaultProps = {
    title: '',
    show: false,
    buttons: []
};

export default Dialog;
