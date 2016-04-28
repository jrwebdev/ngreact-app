import angular from 'angular';
import React from 'react';
import ReactDOM from 'react-dom';
import ngRedux from 'ng-redux';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import {Provider, connect} from 'react-redux';
import createLogger from 'redux-logger';
import reducer from './state/reducers';
import * as appActions from './state/actions';
const logger = createLogger();

// Set up Angular application

import toggleContainer from './containers/toggle/toggle';
import toggle from './components/toggle/toggle';

const app = angular.module('app', [
    toggleContainer,
    toggle,
    ngRedux
]);
app.config(['$ngReduxProvider', ($ngReduxProvider) => $ngReduxProvider.createStoreWith(reducer, [logger])]);

app.directive('app', () => ({
    controllerAs: 'app',
    controller: ['$ngRedux', '$scope', function ($ngRedux, $scope) {

        this.onToggle = (value) => {
            this.toggle(value);
        };

        const mapStateToThis = (state) => ({
            toggleValue: state.app.toggleValue
        });

        let unsubscribe = $ngRedux.connect(mapStateToThis, appActions)(this);
        $scope.$on('$destroy', unsubscribe);
    }],
    template: `
        <h2>Angular Container</h2>
        <div>
            Value: <strong style="color: blue;">{{app.toggleValue}}</strong>    
        </div>
        <div>
            <h3>ng1 Toggle</h3>
            <p>Pure ng1 implementation</p>
            <ng1-toggle value="app.toggleValue"
                        id="ng1-toggle"
                        on-toggle="app.onToggle(value)">
            </ng1-toggle>
        </div>
        <div>
            <h3>ngReact Wrapper Toggle</h3> 
            <p>ngReact implementation with an ng1 wrapper component to maintain Angular bindings and two-way data flow</p>
            <ngreact-wrapper-toggle value="app.toggleValue" 
                                    id="ngreact-wrapper-toggle"
                                    on-toggle="app.onToggle(value)">
            </ngreact-wrapper-toggle>
        </div>
        <div>
            <h3>ngReact Toggle</h3>
            <p>React component using ngReact directive service</p>
            <ngreact-toggle value="app.toggleValue" 
                          id="ngreact-toggle"
                          on-toggle="app.onToggle">
            </ngreact-toggle>
        </div>
        
        <react-toggle-container></react-toggle-container>
    `
}));

/*
// Set up React application
let createStoreWithMiddleware = applyMiddleware(logger)(createStore);
let store = createStoreWithMiddleware(combineReducers(reducer));

import Toggle from './components/toggle/react/toggle.react';

class AppContainer extends React.Component {
    render () {
        return (
            <span>
                <div>
                    Value: <strong style={{color: 'blue'}}>{this.props.toggleValue.toString()}</strong>
                </div>
                <h3>React Toggle</h3>
                <p>Pure React implementation</p>
                <Toggle value={this.props.toggleValue} onToggle={() => this.props.toggle(!this.props.toggleValue)} />
            </span>
        )
    }
}
const ReactApp = connect(
    state => ({toggleValue: state.app.toggleValue}),
    dispatch => ({toggle: (value) => dispatch(appActions.toggle(value))})
)(AppContainer);

const reactContainer = document.getElementById('react-app');
ReactDOM.render((
    <Provider store={store}>
        <span>
            <h2>React App</h2>
            <ReactApp />
        </span>
    </Provider>
), reactContainer);
*/


angular.element(document).ready(() => angular.bootstrap(document, ['app']));
