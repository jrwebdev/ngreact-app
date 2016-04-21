import React from 'react';

import BEM from '../../../utils/bem/bem';

import '../toggle.scss';

const bem = BEM('toggle');

export default React.createClass({

    propTypes: {
        value: React.PropTypes.bool.isRequired,
        onToggle: React.PropTypes.func.isRequired,
        leftLabel: React.PropTypes.string,
        rightLabel: React.PropTypes.string
    },

    getDefaultProps: () => ({
        leftLabel: 'Yes',
        rightLabel: 'No'
    }),

    toggle () {
        console.log('REACT TOGGLE');
        this.props.onToggle(!this.props.value);
    },

    keypressHandler (e) {
        if (e.key === 'Enter') {
            this.toggle();
        }
    },

    render () {
        let leftClass = bem('value', {left: 1, selected: this.props.value});
        let rightClass = bem('value', {right: 1, selected: !this.props.value});

        return (
            <div className={bem} onClick={this.toggle} onKeyPress={this.keypressHandler} tabIndex="0">
                <div className={leftClass}>{this.props.leftLabel}</div>
                <div className={rightClass}>{this.props.rightLabel}</div>
            </div>
        )
    }
});