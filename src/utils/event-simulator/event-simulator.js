import {Simulate} from 'react-addons-test-utils';
import extend from 'lodash/extend';

const reactEventMap = {
    mousedown: 'mouseDown',
    mouseup: 'mouseUp',
    keypress: 'keyPress',
    keydown: 'keyDown',
    keyup: 'keyUp'
};

const keyEventData = (keyCode, eventData) => extend(eventData, {keyCode, which: keyCode, charCode: keyCode});

const simulate = (el, event, eventData = {}) => {

    if (!el) {
        throw new Error('No element specified');
    } else if (el[0]) {
        el = el[0];
    }

    if (!event) {
        throw new Error ('No event specified');
    }

    // Angular event
    let e = new Event(event.toLowerCase(), {
        bubbles: eventData.bubbles || false,
        cancelable: eventData.cancelable || false
    });
    e = extend(e, eventData);
    el.dispatchEvent(e);

    // React event
    event = reactEventMap[event] || event;
    Simulate[event](el, eventData);
};

simulate.keyDown = (el, keyCode, eventData) => simulate(el, 'keyDown', keyEventData(keyCode, eventData));
simulate.keyPress = (el, keyCode, eventData) => simulate(el, 'keyPress', keyEventData(keyCode, eventData));
simulate.keyUp = (el, keyCode, eventData) => simulate(el, 'keyDown', keyEventData(keyCode, eventData));

const key = (el, keyCode) => {
    let eventData = {keyCode, which: keyCode, charCode: keyCode};
    simulate(el, 'keyDown', eventData);
    simulate(el, 'keyPress', eventData);
    simulate(el, 'keyUp', eventData);
};

export {
    simulate,
    key
};