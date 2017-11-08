module app.components {
    export class FingerSelectorComponent {
        constructor(
            public $element: ng.IAugmentedJQuery
        ) {

        }
        /**
         * @Output
         */
        public onclose: any;
        public onselect: any;

        public close() {
            try { this.onclose(); } catch (e) { }
        }

        public selectFinger(finger: Finger) {
            this.onselect({ finger });
        }

        public fingers = Fingers;

    }
    angular.module('app').component('fingerSelector', {
        bindings: {
            onclose: '&',
            onselect: '&'
        }
    });
}