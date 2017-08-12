import React from 'react';
import {bindActionCreators} from 'redux';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';
import {
    increment,
    incrementAsync,
    decrement,
    decrementAsync
} from '../../modules/counter';

const Home = props => (
    <div>
        <h1>Home</h1>
        <p>Count: {props.count}</p>

        <button onClick={props.increment} disabled={props.isIncrementing}>
            Increment
        </button>

        <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
            Increment async
        </button>

        <button onClick={props.decrement} disabled={props.isDecrementing}>
            Decrement
        </button>

        <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
            Decrement async
        </button>

        <button onClick={() => props.changePage()}>Go to about page via redux
        </button>
    </div>
);

const mapStateToProps = state => ({
    count         : state.counter.count,
    isIncrementing: state.counter.isIncrementing,
    isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch => bindActionCreators({
    increment     : increment,
    incrementAsync: incrementAsync,
    decrement     : decrement,
    decrementAsync: decrementAsync,
    changePage    : () => push('/about-us')
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
