import * as React from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import {Overlay, Popover} from 'react-bootstrap';
import uuid from 'uuid';
import {noop} from 'lodash';
import './Styles.css';
import ColorButton from '../ColorButton/index';

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
        const colors = this.renderColors();

        return (
            <div className="color-picker">
                <div ref={ref => this.toggleButton = ref} className="clearfix toggle-wrap">
                    <ColorButton color={this.props.value} onClick={() => this.toggleOverlay()} />
                </div>
                <Overlay show={this.state.isOpen} onHide={() => this.toggleOverlay(false)} rootClose
                         target={props => findDOMNode(this.toggleButton)} placement="bottom">
                    {colors}
                </Overlay>
            </div>
        );
    }

    renderColors() {
        const {value} = this.props;

        return (
            <Popover id={this.id} className="color-picker-overlay">
                {this.props.colorPalette.map((color, index) => {

                    return (
                        <ColorButton key={index} color={color}
                                     onClick={() => this.updateColor(color)}
                                     isSelected={value === color}/>
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
