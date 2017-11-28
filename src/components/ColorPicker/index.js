import * as React from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import {Button, Overlay, Popover} from 'react-bootstrap';
import uuid from 'uuid';
import {noop} from 'lodash';
import './Styles.css';

class ColorPicker extends React.Component {

    static propTypes = {
        value: PropTypes.string,
        colorPalette: PropTypes.arrayOf(PropTypes.string),
        onChange: PropTypes.func
    };

    static defaultProps = {
        onChange: noop,
        value: '',
        colorPalette: []
    };

    constructor() {
        super();

        this.id = 'ColorPicker_' + uuid();

        this.toggleButton = null;

        this.state = {
            isOpen: false
        };
    }

    render() {
        const backgroundStyle = {
            backgroundColor: this.props.value
        };

        const colors = this.renderColors();

        return (
            <div className="color-picker">
                <Button ref={ref => this.toggleButton = ref} onClick={this.toggleOverlay}>
                    <div className="color-button" style={backgroundStyle}/>
                </Button>

                <Overlay show={this.state.isOpen} onHide={() => this.toggleOverlay(false)} rootClose
                         target={props => findDOMNode(this.toggleButton)} placement="bottom">
                    {colors}
                </Overlay>
            </div>
        );
    }

    renderColors() {
        const {value} = this.props.value;

        return (
            <Popover id={this.id} className="color-picker">
                {this.props.colorPalette.map((color, index) => {
                    const classes = [
                        'color-button'
                    ];

                    if (color === value) {
                        classes.push('selected');
                    }

                    return (
                        <Button key={index} onClick={() => this.updateColor(color)}>
                            <div className={classes.join(' ')} style={{backgroundColor: color}}/>
                        </Button>
                    );
                })}
            </Popover>
        );
    }

    updateColor = (color) => {
        this.props.onChange(color);
        this.toggleOverlay(false);
    };

    toggleOverlay = (isOpen) => {
        // Toggle semantics
        if (isOpen === undefined) {
            isOpen = !this.state.isOpen;
        }

        this.setState({isOpen});
    };
}

export default ColorPicker;
