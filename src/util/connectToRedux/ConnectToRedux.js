import React from "react";
import {Connect} from "react-redux";
import PropTypes from 'prop-types';
let reduxStore = null;

export class ConnectToRedux extends React.Component {

    static mountStore = (store) => {
        if(!reduxStore){
            reduxStore = store;
        }
    };

    static propTypes = {
        children: PropTypes.func.isRequired,
        select: PropTypes.func,
        actions: PropTypes.object,
        mountAction: PropTypes.object,
        unMountAction: PropTypes.object,
    }

    constructor(props) {
        super();
        if(!reduxStore){
            throw new Error('Store must be defined via mountStore to let ConnectToRedux work');
        }

        const selectAll = (e) => (e);
        this.unsub = this.observeStore(reduxStore, props.select || this.selectAll, (newState) => this.setState(newState));
    }

    selectAll(s){
        return s;

    }

    observeStore = (store, select, onChange) => {
        let currentState;
        const handleChange = () => {
            let nextState = select(store.getState());
            if (nextState !== currentState) {
                currentState = nextState;
                onChange(currentState);
            }
        };

        let unsubscribe = store.subscribe(handleChange);
        handleChange();
        return unsubscribe;
    };



    componentDidMount(){
        const { mountAction } = this.props;
        if(mountAction){
            reduxStore.dispatch(mountAction());
        }
    }

    componentWillUnMount(){
        const { mountAction } = this.props;
        if(mountAction){
            reduxStore.dispatch(mountAction());
        }

        this.unsub();
    }

    render() {
        const {children, actions, select} = this.props;
        return children(this.state, actions);

    }
}

