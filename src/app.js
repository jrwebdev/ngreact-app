import * as angular from 'angular';

let app = angular.module('app', []);

app.directive('app', () => ({
    template: 'ngreact-app started'
}));

angular.element(document).ready(() => angular.bootstrap(document, ['app']));