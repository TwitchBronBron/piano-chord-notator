module app {
    var idCounter = 0;
    export class FingerSelectorService {
        constructor(
            public $compile: any,
            public $rootScope: ng.IRootScopeService,
            public $document: ng.IDocumentService
        ) {

        }
        public selectFinger(element: Element) {
            //create a new fingerSelector element
            return new Promise<Finger>((resolve, reject) => {
                let fingerSelectorElement: Element;
                let $scope: any = this.$rootScope.$new();
                let id = 'finger-selector-' + idCounter++;
                var coordinates = <JQueryCoordinates>$(element).offset();
                //adjust the coordinates so that the item is centered 
                coordinates.top -= 95;
                coordinates.left -= 60;
                $scope.onclose = () => {
                    fingerSelectorElement.remove();
                    reject();
                };
                $scope.onselect = (finger: Finger) => {
                    fingerSelectorElement.remove();
                    resolve(finger);
                };
                let template = `
                    <finger-selector id="${id}" ng-mouseleave="onclose()" onclose="onclose()" onselect="onselect(finger)" style="top:${coordinates.top}px;left:${coordinates.left}"></finger-selector>
                `;
                var linkFn = this.$compile(template);
                var content = linkFn($scope);
                this.$document.find('body').append(content);
                fingerSelectorElement = <Element>document.getElementById(id);
            });
        }
    }

    angular.module('app').service('fingerSelectorService', FingerSelectorService);
}