declare var html2canvas: any;
module app.components {
    let pianoIdCounter = 1;
    export class PianoChordNotatorComponent {
        constructor(
        ) {
            this.pianoId = 'piano-' + pianoIdCounter++;
        }
        public pianoId: string;

        public export() {
            let element = document.getElementById(this.pianoId);
            html2canvas(document.body).then(function (canvas: HTMLCanvasElement) {
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
    }
    angular.module('app').component('pianoChordNotator', {
        bindings: {
            key: '<'
        }
    });
}