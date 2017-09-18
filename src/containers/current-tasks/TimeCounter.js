import React from 'react';
import PropTypes from 'prop-types';
import {Label} from 'react-bootstrap';
import moment from 'moment';
import 'moment-duration-format';

export default class TimeCounter extends React.Component {

    // noinspection JSUnusedGlobalSymbols
    static PropTypes = {
        startDate: PropTypes.number.isRequired
    };

    constructor(props) {
        super(props);
        this.state    = {
            elapsedTime: 0
        };
        this.interval = 0;
    }

    componentWillMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <span className="task-list-hours">
                <Label bsStyle="info">
                    {
                        moment.duration(this.state.elapsedTime).format(
                            (this.state.elapsedTime > 60 * 60 * 1000)
                                ? 'h[h] m[m]'
                                : 'm[m] s[s]'
                        )
                    }
              </Label>
            </span>
        );
    }

    tick() {
        this.setState({
            ...this.state,
            elapsedTime: Date.now() - this.props.startDate
        });
    }
}
