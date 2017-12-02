import React from 'react';
import PropTypes from 'prop-types';
import {noop} from 'lodash';
import {FormControl} from 'react-bootstrap';

function SearchBox(props) {
    return (
        <div>
            <FormControl onChange={e => props.onChangeQuery(e.target.value)} value={props.query}
                         type="text" placeholder="Enter search text"/>
        </div>
    );
}

SearchBox.propTypes = {
    query: PropTypes.string,
    onChangeQuery: PropTypes.func
};

SearchBox.defaultProps = {
    query: '',
    onChangeQuery: noop
};

export default SearchBox;
