declare var html2canvas: any;
module app.components {
    let pianoIdCounter = 1;
    export class PianoChordNotatorComponent {
        constructor(
        ) {
            this.pianoId = 'piano-' + pianoIdCounter++;
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
            return AllKeys.slice(index);
        }
        public export() {
            let element = document.getElementById(this.pianoId);
            html2canvas(element).then(function (canvas: HTMLCanvasElement) {
                let dataUrl = canvas.toDataURL('image/png');

                let a = document.createElement('a');
                a.href = dataUrl;
                a.innerHTML = 'Click to download';
                a.download = 'export.png';
                a.target = '_blank';
                document.body.appendChild(a);

                let img = document.createElement('img');
                img.src = dataUrl;
                document.body.appendChild(img);
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
    }
    angular.module('app').component('pianoChordNotator', {
        bindings: {
            key: '<'
        }
    });
}