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

        loadDeepLinks() {
            var params = app.parseQueryString(location.search);

            this.beginKey = params.beginKey ? params.beginKey : this.beginKey;

            this.endKey = params.endKey ? params.endKey : this.endKey;

            let keySelection = params.keySelection ? JSON.parse(params.keySelection) : undefined;
            this.keySelection = keySelection ? keySelection : this.keySelection;
        }

        public pianoId: string;
        public whiteKeys = WhiteKeys;
        public defaultBeginKey = Key.c3;
        public defaultEndKey = Key.b5;

        public beginKey: Key;
        public endKey: Key;

        public playKeyWhenPressed = false;
        public chordType: 'major' | 'minor' = 'major';

        public downloadUrl: string | undefined;
        public keySelection: { [key: string]: KeySelection } = {};

        public shareUrl: string;

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
                $('body').addClass('very-wide')
                document.body.scrollLeft = scrollAmount;
                this.$element.addClass('text-left');

                return html2canvas(element, {
                    onrendered: (canvas: HTMLCanvasElement) => {
                        this.$element.removeClass('text-left');
                        $('body').removeClass('very-wide')
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

        calculateShareUrl() {
            let params = {
                beginKey: this.beginKey,
                endKey: this.endKey,
                keySelection: JSON.stringify(this.keySelection)
            };
            this.$location.search(params);
            this.shareUrl = this.$location.absUrl();
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