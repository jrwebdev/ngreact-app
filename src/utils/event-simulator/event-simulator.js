import {Simulate} from 'react-addons-test-utils';
import extend from 'lodash/extend';

const simulate = (el, event, eventData = {}) => {
    // Angular event
    let e = new Event(event.toLowerCase(), {
        bubbles: eventData.bubbles || false,
        cancelable: eventData.cancelable || false
    });
    e = extend(e, eventData);
    el.dispatchEvent(e);
    // React event
    Simulate[event](el, eventData);
};

const key = (el, keyCode) => {
    simulate(el, 'keyDown', {keyCode, which: keyCode});
    simulate(el, 'keyPress', {keyCode, which: keyCode});
    simulate(el, 'keyUp', {keyCode, which: keyCode});
};

export {
    simulate,
    key
};