module app.components {
    export class PianoKeyComponent {
        constructor(
            private $element: ng.IAugmentedJQuery,
            private fingerSelectorService: FingerSelectorService
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
            //if the enharmonic is in the same range as the note, then keep the enharmonic
            if (this.enharmonic && (this.enharmonic === this.note || this.enharmonic === NoteEnharmonics[this.note])) {
                //leave the enharmonic alone
            } else {
                //override the enharmonic with the note
                this.enharmonic = this.note;
            }
        }

        public get enharmonic() {
            return this._enharmonic;
        }
        public set enharmonic(value) {
            //never allow setting the enharmonic to undefined
            if (value) {
                this._enharmonic = value;
            }
        }
        private _enharmonic: string;

        public get note() {
            var note = this.key.replace(/\d*/g, '');
            return note;
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

        public get showFingering() {
            return this._showFingering ? true : false;
        }
        public set showFingering(value) {
            this._showFingering = value ? true : false;
        }
        private _showFingering = true;

        public showKey: boolean;

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

        private fingerSelectorIsVisible = false;
        public showFingerSelector() {
            //don't show the finger selector more than once at a time per key
            if (this.fingerSelectorIsVisible) {
                return;
            }
            let element = this.$element.find('.selected-finger')[0];
            this.fingerSelectorIsVisible = true;
            this.fingerSelectorService.selectFinger(element).then((finger: Finger) => {
                this.finger = finger;
                this.triggerChanged();
                this.fingerSelectorIsVisible = false;
            }, () => {
                //do nothing with the rejection: user canceled.
                this.fingerSelectorIsVisible = false;
            })
        }

        private triggerChanged() {
            try { this.onchange(); } catch (e) { }
        }

        private toggleEnharmonic(event: Event) {
            event.stopPropagation();
            this.enharmonic = NoteEnharmonics[this.enharmonic];
            this.triggerChanged();
        }

        public onchange: any = () => { };
    }
    angular.module('app').component('pianoKey', {
        bindings: {
            enharmonic: '=?',
            key: '=',
            finger: '=',
            isSelected: '=',
            onchange: '&',
            showKey: '<',
            showFingering: '=',
        }
    });
}