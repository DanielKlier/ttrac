import * as React from 'react';
import PropTypes from 'prop-types';
import ToggleDisplay from '../../components/ToggleDisplay';

export default class TaskListTitle extends React.Component {
    // noinspection JSUnusedGlobalSymbols
    static propTypes = {
        title        : PropTypes.string,
        onTextChanged: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            isEditing: !props.title,
            text     : this.props.title || ''
        };

        this.titleInput = null;
    }

    componentWillReceiveProps(props) {

    }

    render() {

        return (
            <h4 className="task-list-description">
                <ToggleDisplay show={!this.state.isEditing && this.state.text}>
                    <span onClick={() => this.showEditInput()}>
                        {this.state.text}
                    </span>
                </ToggleDisplay>
                <ToggleDisplay show={this.state.isEditing || !this.state.text}>
                    <input type="text"
                           ref={el => {this.titleInput = el;}}
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

    stopEditing(value) {
        this.setState({isEditing: false});
        this.props.onTextChanged(value);
    }

    textInputChanged(value) {
        this.setState({text: value});
    }
}