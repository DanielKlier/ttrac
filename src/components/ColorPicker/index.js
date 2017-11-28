import * as React from 'react';
import PropTypes from 'prop-types';
import {Button, OverlayTrigger, Popover} from 'react-bootstrap';
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
    }

    render() {
        const backgroundStyle = {
            backgroundColor: this.props.value
        };

        const colors = this.renderColors();

        return (
            <div className="color-picker">
                <OverlayTrigger trigger="click" placement="bottom" overlay={colors} rootClose>
                    <Button>
                        <div className="color-button" style={backgroundStyle}/>
                    </Button>
                </OverlayTrigger>
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
    };
}

export default ColorPicker;
