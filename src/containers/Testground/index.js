import React, {Component} from 'react';
import ColorPicker from '../../components/ColorPicker/index';
import {range, first} from 'lodash';
import colorConverter from 'color-convert';

class Testground extends Component {
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

        const numColors = 16;
        const stepSize  = 1 / (numColors + 1);

        const colors = range(numColors).map(i => {
            const h = Math.round(i * stepSize * 360);
            const s = 50;
            const l = 50;

            return '#' + colorConverter.hsl.hex(h, s, l);
        });

        return {
            name: 'ColorPicker',
            component: <ColorPicker colorPalette={colors} value={first(colors)}/>
        };
    }
}

export default Testground;
