module app {
    export class AudioService {
        constructor(

        ) {

        }

        public get volume() {
            return this._volume;
        }
        public set volume(value) {
            var intval = parseInt(value + '');
            var volume = isNaN(intval) ? 100 : intval;
            volume = volume < 0 ? 0 : volume;
            volume = volume > 100 ? 100 : volume;
            this._volume = value;

            Howler.volume(this._volume / 100);
        }
        private _volume: number = 100;

        playKeys(keys: Key[]) {
            let urls = this.getKeyUrls(keys);
            for (let url of urls) {
                let sound = new Howl({
                    src: [url]
                });
                sound.play();
            }
        }

        private getKeyUrls(keys: Key[]) {
            let urls = [];
            let audioFileKeys = Object.keys(AudioFiles);
            for (let key of keys) {
                let matches = audioFileKeys.filter((x => {
                    return x.toLowerCase().indexOf('-' + key.toLowerCase()) > -1;
                }));
                if (matches.length === 1) {
                    let filePath = (AudioFiles as any)[matches[0]];
                    urls.push(`audio/${filePath}`);
                } else {
                    let message = `Unable to find a key url for '${key}`;
                    alert(message);
                    throw new Error(message);
                }
            }
            return urls;
        }
    }
    angular.module('app').service('audioService', AudioService);
}