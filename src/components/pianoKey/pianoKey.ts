module app.components {
    export class PianoKeyComponent {
        constructor(
            private $element: ng.IAugmentedJQuery
        ) {
        }

        /**
         * @Input
         */
        public get key() {
            return this._key;
        }
        public set key(value) {
            this._key = value;
            this.updateElementClass();
        }
        private _key: Key;

        private updateElementClass() {
            this.$element.removeClass('white-key').removeClass('black-key');
            this.$element.addClass(this.isWhiteKey ? 'white-key' : 'black-key');
        }
        /**
         * Is this key a white key. If not, it is a black key
         */
        public get isWhiteKey() {
            return WhiteKeys.indexOf(this.key) > -1;
        }
    }
    angular.module('app').component('pianoKey', {
        bindings: {
            key: '<'
        }
    });
}