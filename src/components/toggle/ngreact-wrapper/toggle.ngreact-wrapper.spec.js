import toggle from '../toggle';

import {simulate} from 'ngreact-test-utils';

describe ('components/toggle/ngreact-wrapper', () => {

    let $compile, $scope, $timeout, el;

    beforeEach(angular.mock.module(toggle));

    beforeEach(inject((_$rootScope_, _$compile_, _$timeout_) => {
        $scope = _$rootScope_;
        $compile = _$compile_;
        $timeout = _$timeout_;

        $scope.value = true;
        $scope.onToggle = jasmine.createSpy('onToggle');
    }));

    afterEach(() => {
        el.remove();
        $compile = null;
        $scope = null;
        $timeout = null;
        el = null;
    });

    const compile = (el) => {
        el = $compile(el)($scope);
        $timeout.flush();
        return el;
    };

    it ('should set the left value label to Yes by default', () => {
        el = compile(`<ngreact-wrapper-toggle value="value" on-toggle="onToggle(value)"></ngreact-wrapper-toggle>`);
        let leftLabel = el[0].querySelector('.toggle__value--left');
        expect(leftLabel.textContent).toContain('Yes');
    });

    it ('should set the left value label to No by default', () => {
        el = compile(`<ngreact-wrapper-toggle value="value" on-toggle="onToggle(value)"></ngreact-wrapper-toggle>`);
        let rightLabel = el[0].querySelector('.toggle__value--right');
        expect(rightLabel.textContent).toContain('No');
    });

    it ('should set the left value label to the left-label property', () => {
        el = compile(`<ngreact-wrapper-toggle value="value" on-toggle="onToggle(value)" left-label="True"></ngreact-wrapper-toggle>`);
        let leftLabel = el[0].querySelector('.toggle__value--left');
        expect(leftLabel.textContent).toContain('True');
    });

    it ('should set the right value label to the right-label property', () => {
        el = compile(`<ngreact-wrapper-toggle value="value" on-toggle="onToggle(value)" right-label="False"></ngreact-wrapper-toggle>`);
        let rightLabel = el[0].querySelector('.toggle__value--right');
        expect(rightLabel.textContent).toContain('False');
    });
    
    it ('should set the left value to selected if the value is true', () => {
        $scope.value = true;
        el = compile(`<ngreact-wrapper-toggle value="value" on-toggle="onToggle(value)"></ngreact-wrapper-toggle>`);
        let leftLabel = el[0].querySelector('.toggle__value--left');
        let rightLabel = el[0].querySelector('.toggle__value--right');
        expect(leftLabel.classList.contains('toggle__value--selected')).toEqual(true);
        expect(rightLabel.classList.contains('toggle__value--selected')).toEqual(false);
    });

    it ('should set the right value to selected if the value is false', () => {
        $scope.value = false;
        el = compile(`<ngreact-wrapper-toggle value="value" on-toggle="onToggle(value)"></ngreact-wrapper-toggle>`);
        let leftLabel = el[0].querySelector('.toggle__value--left');
        let rightLabel = el[0].querySelector('.toggle__value--right');
        expect(leftLabel.classList.contains('toggle__value--selected')).toEqual(false);
        expect(rightLabel.classList.contains('toggle__value--selected')).toEqual(true);
    });

    it ('should call the onToggle callback with the value on clicking the toggle', () => {
        el = compile(`<ngreact-wrapper-toggle value="value" on-toggle="onToggle(value)"></ngreact-wrapper-toggle>`);
        let toggle = el[0].querySelector('.toggle');
        simulate(toggle, 'click');
        expect($scope.onToggle).toHaveBeenCalledWith(false);
    });

    it ('should call the onToggle callback with the value on pressing enter on the toggle', () => {
        el = compile(`<ngreact-wrapper-toggle value="value" on-toggle="onToggle(value)"></ngreact-wrapper-toggle>`);
        let toggle = el[0].querySelector('.toggle');
        simulate.keyPress(toggle, 13);
        expect($scope.onToggle).toHaveBeenCalledWith(false);
    });
    
});