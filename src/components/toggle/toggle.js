import ngReact from 'ngreact';

import ng1Toggle from './ng1/toggle.ng1';
import ngReactToggle from './ngreact/toggle.ngreact';
import reactToggle from './react/toggle.react';

const module = angular.module('ngreact-app.components.toggle', [
    ngReact.name
]);

module
    .directive('ng1Toggle', ng1Toggle)
    .directive('ngReactToggle', ngReactToggle)
    .directive('reactToggle', ['reactDirective', (react) => react(reactToggle)]);

export default module.name;
