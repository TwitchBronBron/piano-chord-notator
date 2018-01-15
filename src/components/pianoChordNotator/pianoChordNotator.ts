declare var html2canvas: any;
module app.components {
    let pianoIdCounter = 1;
    export class PianoChordNotatorComponent {
        constructor(
            public $timeout: ng.ITimeoutService,
            public audioService: AudioService,
            public $location: ng.ILocationService,
            public $element: ng.IAugmentedJQuery
        ) {
            this.pianoId = 'piano-' + pianoIdCounter++;
        }

        $onInit() {
            this.reset();
            this.changed();
            this.loadDeepLinks();
        }

        public pianoId: string;
        public whiteKeys = WhiteKeys;
        public defaultBeginKey = Key.c3;
        public defaultEndKey = Key.g5;

        public beginKey: Key;
        public endKey: Key;

        public playKeyWhenPressed = false;

        public get showOctaveIndicator() {
            return this._showOctaveIndicator;
        }
        public set showOctaveIndicator(value) {
            this._showOctaveIndicator = value;
            if (this.showOctaveIndicator === false) {
                this.$element.addClass('hide-octave-indicator');
            } else {
                this.$element.removeClass('hide-octave-indicator');
            }
            this.changed();
        }
        private _showOctaveIndicator = false;

        public get volume() {
            return this._volume;
        }
        public set volume(value) {
            var intval = parseInt(value + '');
            this._volume = isNaN(intval) ? this._volume : intval;
            this.audioService.volume = this._volume;
            this.changed();
        }
        private _volume: number = 50;

        public get showFingering() {
            return this._showFingering ? true : false;
        }
        public set showFingering(value) {
            this._showFingering = value ? true : false;
            this.changed();
        }
        private _showFingering = true;

        public downloadUrl: string | undefined;
        public keySelection: { [key: string]: KeySelection } = {};

        public shareUrl: string;

        loadDeepLinks() {
            var params = app.parseQueryString(location.search);

            this.beginKey = params.beginKey ? params.beginKey : this.beginKey;

            this.endKey = params.endKey ? params.endKey : this.endKey;

            this.chordName = params.chordName ? params.chordName : this.chordName;

            this.volume = params.volume ? params.volume : this.volume;

            this.showFingering = params.showFingering ?
                (params.showFingering === 'undefined' || params.showFingering === true ? true : false) :
                this.showFingering;

            this.showOctaveIndicator = params.showOctaveIndicator ?
                (params.showOctaveIndicator === 'undefined' || params.showOctaveIndicator === true ? true : false) :
                this.showOctaveIndicator;

            this.enharmonicSelection = params.enharmonicSelection ? JSON.parse(params.enharmonicSelection) : this.enharmonicSelection;

            let keySelection = params.keySelection ? JSON.parse(params.keySelection) : undefined;
            this.keySelection = keySelection ? keySelection : this.keySelection;
        }

        calculateShareUrl() {
            let params = {
                beginKey: this.beginKey,
                endKey: this.endKey,
                keySelection: JSON.stringify(this.keySelection),
                chordName: this.chordName,
                showOctaveIndicator: this.showOctaveIndicator,
                volume: this.volume,
                showFingering: this.showFingering,
                enharmonicSelection: JSON.stringify(this.enharmonicSelection)
            };
            this.$location.search(params);
            this.shareUrl = this.$location.absUrl();
        }

        public getRemainingKeys(key: Key) {
            let index = WhiteKeys.indexOf(key);
            if (index === -1) {
                throw new Error(`Unknown key: '${key}`);
            }
            return WhiteKeys.slice(index);
        }

        public clearSelection() {
            this.keySelection = {};
        }

        public reset() {
            this.beginKey = this.defaultBeginKey;
            this.endKey = this.defaultEndKey;
            this.clearSelection();
        }

        private timeoutHandle: Promise<void>;

        private get chordName() {
            return this._chordName;
        }
        private set chordName(value) {
            this._chordName = value;
            this.changed();
        }
        private _chordName = 'Chord Name';

        /**
         * Called every time the piano changes
         */
        public changed() {
            this.calculateShareUrl();
        }

        public generateImage() {
            this.downloadUrl = undefined;
            //let the UI finish rendering
            let timeoutHandle = this.timeoutHandle = this.$timeout(100).then(() => {
                if (timeoutHandle !== this.timeoutHandle) {
                    return Promise.reject(new Error('Another change has occurred since we started'));
                }
                let element = <HTMLElement>document.getElementById(this.pianoId);
                let parent = <HTMLElement>element.parentElement;
                let scrollAmount = parent.scrollLeft;
                parent.scrollLeft = 0;
                //temporarily force a width for the toolbar
                let toolbarContainer = $('.toolbar-container');
                let toolbarWidth = (toolbarContainer.width() as any);
                toolbarContainer.css({
                    position: 'relative',
                    width: toolbarWidth,
                    left: `${scrollAmount}px`
                });
                $('body').css({ width: `${parent.scrollWidth}px` });

                document.body.scrollLeft = scrollAmount;
                // this.$element.addClass('text-left');

                return html2canvas(element, {
                    onrendered: (canvas: HTMLCanvasElement) => {
                        this.$element.removeClass('text-left');
                        $('body').css({ width: '' });
                        parent.scrollLeft = scrollAmount;
                        toolbarContainer.css({
                            position: '',
                            width: '',
                            left: ''
                        });
                        document.body.scrollLeft = 0;
                    }
                });
            }).then((canvas: HTMLCanvasElement) => {
                this.downloadUrl = canvas.toDataURL('image/png');
            }, () => {

            });
        }

        public enharmonicSelection: { [note: string]: string } = {};

        public get exportName() {
            return this.chordName && this.chordName.trim().length > 0 ?
                this.chordName :
                'export.png';
        }

        public addLowerKey() {
            let index = WhiteKeys.indexOf(this.beginKey);
            this.beginKey = WhiteKeys[index - 1];
        }

        public addHigherKey() {
            let index = WhiteKeys.indexOf(this.endKey);
            this.endKey = WhiteKeys[index + 1];
        }

        public playChord() {
            let keys = <Key[]>Object.keys(this.keySelection);
            this.audioService.playKeys(keys);
        }

    }
    angular.module('app').component('pianoChordNotator', {
        bindings: {
            key: '<'
        }
    });
}