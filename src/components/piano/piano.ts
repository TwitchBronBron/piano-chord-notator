module app.components {
    export class PianoComponent {
        constructor(
            public $element: ng.IAugmentedJQuery,
            public $scope: ng.IScope,
            public audioService: AudioService
        ) {
            $scope.$watchCollection(() => {
                return this.keySelection;
            }, () => {
                this.triggerChanged();
            });
        }

        public get playKeyWhenPressed() {
            return this._playKeyWhenPressed ? true : false;
        }
        public set playKeyWhenPressed(value) {
            this._playKeyWhenPressed = value ? true : false;
        }
        private _playKeyWhenPressed: boolean;

        public get chordType() {
            return this._chordType ? this._chordType : 'major';
        }
        public set chordType(value) {
            this._chordType = value === 'minor' ? 'minor' : 'major';
            this.triggerChanged();
        }
        private _chordType: 'major' | 'minor';

        /**
         * The key the piano should begin at (including this key)
         * @Input
         */
        public set beginKey(value: Key) {
            this._beginKey = value;
            this.tryCalculateKeyRange();
        }
        public get beginKey() {
            return this._beginKey;
        }
        private _beginKey: Key;

        /**
         * The key the piano should end at (including this key)
         */
        public set endKey(value: Key) {
            this._endKey = value;
            this.tryCalculateKeyRange();
        }
        public get endKey() {
            return this._endKey;
        }
        private _endKey: Key;

        /**
         * The list of all keys (in order) to display on the piano
         */
        public get keyRange() {
            return this._keyRange;
        }
        private _keyRange: Key[];

        public get beginsWithBlackKey() {
            return BlackKeys.indexOf(this.beginKey) > -1;
        }

        public get endsWithBlackKey() {
            return BlackKeys.indexOf(this.endKey) > -1;
        }

        public keyClick(key: Key) {
            this.toggleKeySelection(key);
            this.playKey(key);
        }

        private keySelection: { [key: string]: KeySelection } = {};

        toggleKeySelection(key: Key) {
            if (this.keySelection[key]) {
                delete this.keySelection[key];
            } else {
                this.keySelection[key] = <any>{
                    key,
                    finger: undefined,
                    hand: undefined
                };
            }
            this.triggerChanged();
        }

        public keyIsSelected(key: Key) {
            return this.keySelection[key] !== undefined;
        }


        /**
         * Try to calculate the key range. Otherwise set to undefined
         */
        private tryCalculateKeyRange() {
            if (this._beginKey && this._endKey) {
                this._keyRange = this.getKeyRange(this._beginKey, this._endKey);
            } else {
                (this._keyRange as any) = undefined;
            }
            this.triggerChanged();
        }

        /**
         * Given a begin and end key, get the list of keys that fall between (including the provided keys)
         * @param beginKey
         * @param endKey 
         */
        private getKeyRange(beginKey: Key, endKey: Key) {
            //sanity checks
            if (!beginKey || !endKey) {
                throw new Error('beginKey and endKey must both be specified');
            }
            let beginIndex = AllKeys.indexOf(beginKey);
            if (beginIndex === -1) {
                throw new Error(`Unknown begin key '${beginKey}'`)
            }
            let endIndex = AllKeys.indexOf(endKey);
            if (endIndex === -1) {
                throw new Error(`Unknown end key '${endKey}'`)
            }
            if (beginIndex > endIndex) {
                throw new Error('begin key must be lower than end key');
            }

            return AllKeys.slice(beginIndex, endIndex + 1);
        }
        public onchange: any = () => { };
        private triggerChanged() {
            this.onchange();
        }

        public playKey(key: Key) {
            if (this.playKeyWhenPressed) {
                this.audioService.playKeys([key]);
            }
        }

    }

    angular.module('app').component('piano', {
        bindings: {
            beginKey: '@',
            endKey: '@',
            onchange: '&',
            keySelection: '=',
            playKeyWhenPressed: '=',
            chordType: '='
        }
    });
}