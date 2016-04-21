// Wrapper to maintain Angular two-way bindings and binding-types
export default [() => ({
    controllerAs: 'ngReactToggle',
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
        <react-toggle value="ngReactToggle.value"
                      left-label="ngReactToggle.leftLabel"
                      right-label="ngReactToggle.rightLabel"
                      on-toggle="ngReactToggle.onToggle">
        </react-toggle>
    `
})];