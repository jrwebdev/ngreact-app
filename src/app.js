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
            <ng1-toggle value="app.toggleValue"
                        on-toggle="app.onToggle(value)">
            </ng1-toggle>
        </div>
        <div>
            <h2>ngReact Toggle</h2> 
            <ng-react-toggle value="app.toggleValue" 
                             on-toggle="app.onToggle(value)">
            </ng-react-toggle>
        </div>
        <div>
            <h2>React Toggle</h2>    
            <react-toggle value="app.toggleValue" 
                          on-toggle="app.onToggle">
            </react-toggle>
        </div>    
    `
}));

angular.element(document).ready(() => angular.bootstrap(document, ['app']));