"use strict";
var app;
(function (app) {
    var module = angular.module('app', []);
    var originalComponent = module.component;
    module.component = function (name, options) {
        //assume all templates are named the same as their components
        if (!options.template && !options.templateUrl) {
            options.templateUrl = name + ".html";
        }
        options.controllerAs = options.controllerAs ? options.controllerAs : 'vm';
        if (!options.controller) {
            var controllerName = name.substring(0, 1).toUpperCase() + name.substring(1) + 'Component';
            var controller = app.components[controllerName];
            if (!controller) {
                throw new Error("Error registering component '" + name + "'. No component named '" + controllerName + "' exists.");
            }
            options.controller = controller;
        }
        return originalComponent.apply(module, [name, options]);
    };
})(app || (app = {}));

"use strict";
var app;
(function (app) {
    /**
     * One of the 12 notes per octive
     */
    var Note;
    (function (Note) {
        Note["c"] = "C";
        Note["csharp"] = "C#";
        Note["d"] = "D";
        Note["dsharp"] = "D#";
        Note["e"] = "E";
        Note["f"] = "F";
        Note["fsharp"] = "F#";
        Note["g"] = "G";
        Note["gsharp"] = "G#";
        Note["a"] = "A";
        Note["asharp"] = "A#";
        Note["b"] = "B";
    })(Note = app.Note || (app.Note = {}));
    /**
     * An absolute reference to a specific key on a piano.
     */
    var Key;
    (function (Key) {
        Key["a0"] = "A0";
        Key["asharp0"] = "A#0";
        Key["b0"] = "B0";
        Key["c1"] = "C1";
        Key["csharp1"] = "C#1";
        Key["d1"] = "D1";
        Key["dsharp1"] = "D#1";
        Key["e1"] = "E1";
        Key["f1"] = "F1";
        Key["fsharp1"] = "F#1";
        Key["g1"] = "G1";
        Key["gsharp1"] = "G#1";
        Key["a1"] = "A1";
        Key["asharp1"] = "A#1";
        Key["b1"] = "B1";
        Key["c2"] = "C2";
        Key["csharp2"] = "C#2";
        Key["d2"] = "D2";
        Key["dsharp2"] = "D#2";
        Key["e2"] = "E2";
        Key["f2"] = "F2";
        Key["fsharp2"] = "F#2";
        Key["g2"] = "G2";
        Key["gsharp2"] = "G#2";
        Key["a2"] = "A2";
        Key["asharp2"] = "A#2";
        Key["b2"] = "B2";
        Key["c3"] = "C3";
        Key["csharp3"] = "C#3";
        Key["d3"] = "D3";
        Key["dsharp3"] = "D#3";
        Key["e3"] = "E3";
        Key["f3"] = "F3";
        Key["fsharp3"] = "F#3";
        Key["g3"] = "G3";
        Key["gsharp3"] = "G#3";
        Key["a3"] = "A3";
        Key["asharp3"] = "A#3";
        Key["b3"] = "B3";
        Key["c4"] = "C4";
        Key["csharp4"] = "C#4";
        Key["d4"] = "D4";
        Key["dsharp4"] = "D#4";
        Key["e4"] = "E4";
        Key["f4"] = "F4";
        Key["fsharp4"] = "F#4";
        Key["g4"] = "G4";
        Key["gsharp4"] = "G#4";
        Key["a4"] = "A4";
        Key["asharp4"] = "A#4";
        Key["b4"] = "B4";
        Key["c5"] = "C5";
        Key["csharp5"] = "C#5";
        Key["d5"] = "D5";
        Key["dsharp5"] = "D#5";
        Key["e5"] = "E5";
        Key["f5"] = "F5";
        Key["fsharp5"] = "F#5";
        Key["g5"] = "G5";
        Key["gsharp5"] = "G#5";
        Key["a5"] = "A5";
        Key["asharp5"] = "A#5";
        Key["b5"] = "B5";
    })(Key = app.Key || (app.Key = {}));
    app.AllKeys = [
        Key.a0,
        Key.asharp0,
        Key.b0,
        Key.c1,
        Key.csharp1,
        Key.d1,
        Key.dsharp1,
        Key.e1,
        Key.f1,
        Key.fsharp1,
        Key.g1,
        Key.gsharp1,
        Key.a1,
        Key.asharp1,
        Key.b1,
        Key.c2,
        Key.csharp2,
        Key.d2,
        Key.dsharp2,
        Key.e2,
        Key.f2,
        Key.fsharp2,
        Key.g2,
        Key.gsharp2,
        Key.a2,
        Key.asharp2,
        Key.b2,
        Key.c3,
        Key.csharp3,
        Key.d3,
        Key.dsharp3,
        Key.e3,
        Key.f3,
        Key.fsharp3,
        Key.g3,
        Key.gsharp3,
        Key.a3,
        Key.asharp3,
        Key.b3,
        Key.c4,
        Key.csharp4,
        Key.d4,
        Key.dsharp4,
        Key.e4,
        Key.f4,
        Key.fsharp4,
        Key.g4,
        Key.gsharp4,
        Key.a4,
        Key.asharp4,
        Key.b4,
        Key.c5,
        Key.csharp5,
        Key.d5,
        Key.dsharp5,
        Key.e5,
        Key.f5,
        Key.fsharp5,
        Key.g5,
        Key.gsharp5,
        Key.a5,
        Key.asharp5,
        Key.b5,
    ];
    app.WhiteNotes = [
        Note.a,
        Note.b,
        Note.c,
        Note.d,
        Note.e,
        Note.f,
        Note.g
    ];
    app.BlackNotes = [
        Note.asharp,
        Note.csharp,
        Note.dsharp,
        Note.fsharp,
        Note.gsharp
    ];
    app.WhiteKeys = app.AllKeys.filter(function (key) {
        return key.indexOf('#') === -1;
    });
    app.BlackKeys = app.AllKeys.filter(function (key) {
        return key.indexOf('#') > -1;
    });
})(app || (app = {}));

"use strict";
var app;
(function (app) {
    var components;
    (function (components) {
        var pianoIdCounter = 1;
        var PianoChordNotatorComponent = /** @class */ (function () {
            function PianoChordNotatorComponent() {
                this.pianoId = 'piano-' + pianoIdCounter++;
            }
            PianoChordNotatorComponent.prototype.export = function () {
                var element = document.getElementById(this.pianoId);
                html2canvas(document.body).then(function (canvas) {
                    var dataUrl = canvas.toDataURL('image/png');
                    var a = document.createElement('a');
                    a.href = dataUrl;
                    a.innerHTML = 'Click to download';
                    a.download = 'export.png';
                    a.target = '_blank';
                    document.body.appendChild(a);
                    var img = document.createElement('img');
                    img.src = dataUrl;
                    document.body.appendChild(img);
                });
            };
            return PianoChordNotatorComponent;
        }());
        components.PianoChordNotatorComponent = PianoChordNotatorComponent;
        angular.module('app').component('pianoChordNotator', {
            bindings: {
                key: '<'
            }
        });
    })(components = app.components || (app.components = {}));
})(app || (app = {}));

"use strict";
var app;
(function (app) {
    var components;
    (function (components) {
        var PianoComponent = /** @class */ (function () {
            function PianoComponent() {
            }
            Object.defineProperty(PianoComponent.prototype, "beginKey", {
                get: function () {
                    return this._beginKey;
                },
                /**
                 * The key the piano should begin at (including this key)
                 * @Input
                 */
                set: function (value) {
                    this._beginKey = value;
                    this.tryCalculateKeyRange();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PianoComponent.prototype, "endKey", {
                get: function () {
                    return this._endKey;
                },
                /**
                 * The key the piano should end at (including this key)
                 */
                set: function (value) {
                    this._endKey = value;
                    this.tryCalculateKeyRange();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PianoComponent.prototype, "keyRange", {
                /**
                 * The list of all keys (in order) to display on the piano
                 */
                get: function () {
                    return this._keyRange;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Try to calculate the key range. Otherwise set to undefined
             */
            PianoComponent.prototype.tryCalculateKeyRange = function () {
                if (this._beginKey && this._endKey) {
                    this._keyRange = this.getKeyRange(this._beginKey, this._endKey);
                }
                else {
                    this._keyRange = undefined;
                }
            };
            /**
             * Given a begin and end key, get the list of keys that fall between (including the provided keys)
             * @param beginKey
             * @param endKey
             */
            PianoComponent.prototype.getKeyRange = function (beginKey, endKey) {
                //sanity checks
                if (!beginKey || !endKey) {
                    throw new Error('beginKey and endKey must both be specified');
                }
                var beginIndex = app.AllKeys.indexOf(beginKey);
                if (beginIndex === -1) {
                    throw new Error("Unknown begin key '" + beginKey + "'");
                }
                var endIndex = app.AllKeys.indexOf(endKey);
                if (endIndex === -1) {
                    throw new Error("Unknown end key '" + endKey + "'");
                }
                if (beginIndex > endIndex) {
                    throw new Error('begin key must be lower than end key');
                }
                return app.AllKeys.slice(beginIndex, endIndex);
            };
            return PianoComponent;
        }());
        components.PianoComponent = PianoComponent;
        angular.module('app').component('piano', {
            bindings: {
                beginKey: '@',
                endKey: '@'
            }
        });
    })(components = app.components || (app.components = {}));
})(app || (app = {}));

"use strict";
var app;
(function (app) {
    var components;
    (function (components) {
        var PianoKeyComponent = /** @class */ (function () {
            function PianoKeyComponent($element) {
                this.$element = $element;
            }
            Object.defineProperty(PianoKeyComponent.prototype, "key", {
                /**
                 * @Input
                 */
                get: function () {
                    return this._key;
                },
                set: function (value) {
                    this._key = value;
                    this.updateElementClass();
                },
                enumerable: true,
                configurable: true
            });
            PianoKeyComponent.prototype.updateElementClass = function () {
                this.$element.removeClass('white-key').removeClass('black-key');
                this.$element.addClass(this.isWhiteKey ? 'white-key' : 'black-key');
            };
            Object.defineProperty(PianoKeyComponent.prototype, "isWhiteKey", {
                /**
                 * Is this key a white key. If not, it is a black key
                 */
                get: function () {
                    return app.WhiteKeys.indexOf(this.key) > -1;
                },
                enumerable: true,
                configurable: true
            });
            return PianoKeyComponent;
        }());
        components.PianoKeyComponent = PianoKeyComponent;
        angular.module('app').component('pianoKey', {
            bindings: {
                key: '<'
            }
        });
    })(components = app.components || (app.components = {}));
})(app || (app = {}));

//# sourceMappingURL=app.js.map
