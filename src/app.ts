module app {
    let module = angular.module('app', []);
    let originalComponent = module.component;
    module.component = function (name: string, options: ng.IComponentOptions) {
        //assume all templates are named the same as their components
        if (!options.template && !options.templateUrl) {
            options.templateUrl = `${name}.html`;
        }
        options.controllerAs = options.controllerAs ? options.controllerAs : 'vm';
        if (!options.controller) {
            let controllerName = name.substring(0, 1).toUpperCase() + name.substring(1) + 'Component';
            let controller = (app.components as any)[controllerName];
            if (!controller) {
                throw new Error(`Error registering component '${name}'. No component named '${controllerName}' exists.`);
            }
            options.controller = controller;
        }
        return originalComponent.apply(module, [name, options]);
    };
}