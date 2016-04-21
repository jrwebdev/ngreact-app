import angular from 'angular';

import toggle from './components/toggle/toggle';

const app = angular.module('app', [
    toggle
]);

app.directive('app', () => ({
    controllerAs: 'app',
    controller () {
        this.toggleValue = true;
        this.onToggle = (value) => {
            console.log('onToggle', value);
            this.toggleValue = value;
        }
    },
    template: `
        <div>
            Value: <strong style="color: blue;">{{app.toggleValue}}</strong>    
        </div>
        <div>
            <h2>ng1 Toggle</h2>
            <p>Pure ng1 implementation</p>
            <ng1-toggle value="app.toggleValue"
                        id="ng1-toggle"
                        on-toggle="app.onToggle(value)">
            </ng1-toggle>
        </div>
        <div>
            <h2>ngReact Wrapper Toggle</h2> 
            <p>ngReact implementation with an ng1 wrapper component to maintain Angular bindings and two-way data flow</p>
            <ngreact-wrapper-toggle value="app.toggleValue" 
                                    id="ngreact-wrapper-toggle"
                                    on-toggle="app.onToggle(value)">
            </ngreact-wrapper-toggle>
        </div>
        <div>
            <h2>ngReact Toggle</h2>
            <p>React component using ngReact directive service</p>
            <ngreact-toggle value="app.toggleValue" 
                          id="ngreact-toggle"
                          on-toggle="app.onToggle">
            </ngreact-toggle>
        </div>    
    `
}));

angular.element(document).ready(() => angular.bootstrap(document, ['app']));
