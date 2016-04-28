import angular from 'angular';
import ngRedux from 'ng-redux';
import React from 'react';
import {connect} from 'react-redux';

import {toggle} from '../../state/actions';
import Toggle from '../../components/toggle/react/toggle.react';

let module = angular.module('ng-react.containers.toggle', [ngRedux]);

module.directive('toggleContainer', () => ({
    template: 'toggleContainer'
}));

class ReactApp extends React.Component {
    render () {
        let {toggleValue: value} = this.props;
        let {dispatch} = this.props.store;
        return (
            <span>
                <h2>React App</h2>
                <Toggle value={value} onToggle={() => dispatch(toggle(!value))} />
            </span>
        )
    }
}

const ConnectedReactApp = connect(
    state => ({toggleValue: state.app.toggleValue})
)(ReactApp);

module.directive('reactToggleContainer', ['reactDirective', '$ngRedux', (react, $ngRedux) => {
    return react(ConnectedReactApp, undefined, {restrict: 'E'}, {store: $ngRedux});
}]);

export default module.name;

