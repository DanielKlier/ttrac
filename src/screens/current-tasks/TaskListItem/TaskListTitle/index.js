import * as React from 'react';
import PropTypes from 'prop-types';
import {noop} from 'lodash';
import ToggleDisplay from '../../../../components/ToggleDisplay';
import './Styles.css';

export default class TaskListTitle extends React.Component {
    // noinspection JSUnusedGlobalSymbols
    static propTypes = {
        title: PropTypes.string,
        onTextChanged: PropTypes.func
    };

    // noinspection JSUnusedGlobalSymbols
    static defaultProps = {
        title: '',
        onTextChanged: noop
    };

    constructor(props) {
        super(props);

        this.state = {
            isEditing: !props.title,
            text: this.props.title || ''
        };

        this.titleInput = null;
    }

    render() {

        return (
            <h4 className="task-list-description">
                <ToggleDisplay show={!this.state.isEditing && this.state.text}>
                    <span className="title" onClick={() => this.showEditInput()}>
                        {this.state.text}
                    </span>
                </ToggleDisplay>
                <ToggleDisplay show={this.state.isEditing || !this.state.text}>
                    <input type="text"
                           className="title-input"
                           ref={el => {
                               this.titleInput = el;
                           }}
                           value={this.state.text}
                           onBlur={(e) => this.stopEditing(e.target.value)}
                           placeholder="Click to add a title"
                           onChange={
                               (e) => this.textInputChanged(e.target.value)
                           }
                    />
                </ToggleDisplay>
            </h4>
        );
    }

    showEditInput() {
        const input = this.titleInput;
        this.setState({isEditing: true}, () => {
            input.focus();
            input.select();
        });
    }

    stopEditing() {
        this.setState({isEditing: false}, () => {
            this.props.onTextChanged(this.state.text);
        });
    }

    textInputChanged(value) {
        this.setState({text: value});
    }
}
