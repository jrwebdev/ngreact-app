const BEM = (block) => {

    const bem = (element, modifiers) => {
        let baseClass = block + (element ? '__' + element : '');
        let classes = baseClass;
        if (modifiers) {
            for (let modifier in modifiers) {
                if (modifiers.hasOwnProperty(modifier) && modifiers[modifier]) {
                    classes += ' ' + baseClass + '--' + modifier;
                }
            }
        }
        return classes;
    };

    bem.toString = () => block;

    return bem;
};

export default BEM;