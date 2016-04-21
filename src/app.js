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
            Value: {{app.toggleValue}}    
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
            <p>ngReact implementation with a wrapper component to maintain Angular bindings and two-way data flow</p>
            <ng-react-toggle value="app.toggleValue" 
                             id="ngreact-toggle"
                             on-toggle="app.onToggle(value)">
            </ng-react-toggle>
        </div>
        <div>
            <h2>ngReact Toggle</h2>
            <p>React component using ngReact directive service</p>
            <react-toggle value="app.toggleValue" 
                          id="react-toggle"
                          on-toggle="app.onToggle">
            </react-toggle>
        </div>    
    `
}));

angular.element(document).ready(() => angular.bootstrap(document, ['app']));

/*
import getEventKey from 'react/lib/getEventKey';
import getEventCharCode from 'react/lib/getEventCharCode';
 */

const keyHandler = (e) => console.log('native', e);

document.addEventListener('keydown', keyHandler);
document.addEventListener('keypress', keyHandler);
document.addEventListener('keyup', keyHandler);
