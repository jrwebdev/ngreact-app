// Wrapper to maintain Angular two-way bindings and binding-types
export default [() => ({
    controllerAs: 'ngreactWrapperToggle',
    bindToController: {
        value: '=',
        leftLabel: '@',
        rightLabel: '@',
        onToggle: '&'
    },
    controller () {
        const onToggle = this.onToggle;
        this.onToggle = (value) => {
            onToggle({value})
        };
    },
    template: `
        <ngreact-toggle value="ngreactWrapperToggle.value"
                        left-label="ngreactWrapperToggle.leftLabel"
                        right-label="ngreactWrapperToggle.rightLabel"
                        on-toggle="ngreactWrapperToggle.onToggle">
        </ngreact-toggle>
    `
})];