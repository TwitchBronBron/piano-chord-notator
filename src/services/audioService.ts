module app {
    export class AudioService {
        constructor(

        ) {

        }

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