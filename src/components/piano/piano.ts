module app.components {
    export class PianoComponent {
        constructor(
            public $element: ng.IAugmentedJQuery
        ) {
        }

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


        /**
         * Try to calculate the key range. Otherwise set to undefined
         */
        private tryCalculateKeyRange() {
            if (this._beginKey && this._endKey) {
                this._keyRange = this.getKeyRange(this._beginKey, this._endKey);
            } else {
                (this._keyRange as any) = undefined;
            }
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
    }

    angular.module('app').component('piano', {
        bindings: {
            beginKey: '@',
            endKey: '@'
        }
    });
}