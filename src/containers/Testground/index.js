import React, {Component} from 'react';
import ColorPicker from '../../components/ColorPicker/index';
import {first, range} from 'lodash';
import colorConverter from 'color-convert';

class Testground extends Component {

    constructor() {
        super();

        this.colorPickerColors = this.makeColors(16);

        this.state = {
            colorPicker: first(this.colorPickerColors)
        };

    }

    render() {

        const components = [
            this.colorPicker()
        ];

        return (
            <div>
                <h1>Testground</h1>
                <section>
                    {components.map(({name, component}, index) => (
                        <div key={index}>
                            <h2>{name}</h2>
                            <div>{component}</div>
                        </div>
                    ))}
                </section>
            </div>
        );
    }

    colorPicker() {

        return {
            name: 'ColorPicker',
            component: <ColorPicker colorPalette={this.colorPickerColors}
                                    value={this.state.colorPicker}
                                    onChange={v => this.setState({colorPicker: v})}/>
        };
    }

    makeColors(numColors) {
        const stepSize = 1 / (numColors + 1);

        return range(numColors).map(i => {
            const h = Math.round(i * stepSize * 360);
            const s = 50;
            const l = 50;

            return '#' + colorConverter.hsl.hex(h, s, l);
        });
    }
}

export default Testground;
