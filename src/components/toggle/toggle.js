import ngReact from 'ngreact';

import ng1Toggle from './ng1/toggle.ng1';
import ngreactWrapperToggle from './ngreact-wrapper/toggle.ngreact-wrapper';
import reactToggle from './react/toggle.react';

import './toggle.scss';

const module = angular.module('ngreact-app.components.toggle', [
    ngReact.name
]);

module
    .directive('ng1Toggle', ng1Toggle)
    .directive('ngreactWrapperToggle', ngreactWrapperToggle)
    .directive('ngreactToggle', ['reactDirective', (react) => react(reactToggle)]);

export default module.name;
