module app.components {
    export class PianoKeyComponent {
        constructor(
            private $element: ng.IAugmentedJQuery
        ) {
        }

        public fingers = Fingers;
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

        /**
         * @Input
         */
        public get isSelected() {
            return this._isSelected;
        }
        public set isSelected(value) {
            this._isSelected = value;
            this.updateElementClass();
        }
        private _isSelected: boolean = false;

        /**
         * @Input
         */
        public finger: Finger;

        private updateElementClass() {
            this.$element.removeClass('white-key').removeClass('black-key');
            this.$element.addClass(this.isWhiteKey ? 'white-key' : 'black-key');

            this.$element.removeClass('selected');
            if (this.isSelected) {
                this.$element.addClass('selected');
            }
        }
        /**
         * Is this key a white key. If not, it is a black key
         */
        public get isWhiteKey() {
            return WhiteKeys.indexOf(this.key) > -1;
        }

        public fingerSelectorIsVisible = false;

        public setSelectedFinger(finger: Finger, event: Event) {
            event.stopPropagation();
            this.finger = finger;
            this.fingerSelectorIsVisible = false;
        }
    }
    angular.module('app').component('pianoKey', {
        bindings: {
            key: '=',
            finger: '=',
            isSelected: '='
        }
    });
}