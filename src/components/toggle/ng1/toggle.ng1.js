import '../toggle.scss';

export default [() => ({
    controllerAs: 'ng1Toggle',
    bindToController: {
        value: '=',
        leftLabel: '@',
        rightLabel: '@',
        onToggle: '&'
    },
    controller () {
        this.toggle = () => {
            this.value = !this.value;
            this.onToggle({value: this.value});
        };

        this.keyHandler = (e) => {
            if (e.keyCode === 13) {
                this.toggle();
            }
        };
    },
    template: `
        <div class="toggle" 
             ng-click="ng1Toggle.toggle()" 
             ng-keypress="ng1Toggle.keyHandler($event)"
             tabindex="0">
            <div class="toggle__value toggle__value--left"
                 ng-class="{'toggle__value--selected': ng1Toggle.value}">
                {{ng1Toggle.leftLabel || 'Yes'}}
            </div>
            <div class="toggle__value toggle__value--right"
                 ng-class="{'toggle__value--selected': !ng1Toggle.value}">
                {{ng1Toggle.rightLabel || 'No'}}
            </div>
        </div>
    `
})];