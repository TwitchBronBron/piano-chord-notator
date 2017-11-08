declare var html2canvas: any;
module app.components {
    let pianoIdCounter = 1;
    export class PianoChordNotatorComponent {
        constructor(
            public $timeout: ng.ITimeoutService,
            public audioService: AudioService
        ) {
            this.pianoId = 'piano-' + pianoIdCounter++;
        }

        $onInit() {
            this.changed();
        }

        public pianoId: string;
        public whiteKeys = WhiteKeys;
        public beginKey = Key.c3;
        public endKey = Key.c4;

        public getRemainingKeys(key: Key) {
            let index = WhiteKeys.indexOf(key);
            if (index === -1) {
                throw new Error(`Unknown key: '${key}`);
            }
            return WhiteKeys.slice(index);
        }

        public downloadUrl: string | undefined;
        public keySelection: { [key: string]: KeySelection } = {};

        public reset() {
            this.keySelection = {};
        }

        private timeoutHandle: Promise<void>;
        /**
         * Called every time the piano changes
         */
        public changed() {
            this.downloadUrl = undefined;
            //let the UI finish rendering
            let timeoutHandle = this.timeoutHandle = this.$timeout(100).then(() => {
                if (timeoutHandle !== this.timeoutHandle) {
                    return Promise.reject(new Error('Another change has occurred since we started'));
                }
                let element = document.getElementById(this.pianoId);
                return html2canvas(element);
            }).then((canvas: HTMLCanvasElement) => {
                this.downloadUrl = canvas.toDataURL('image/png');
            }, () => {

            });
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