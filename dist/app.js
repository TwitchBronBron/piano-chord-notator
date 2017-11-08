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
    //overwrite the window Promise object 
    module.run(function ($q) {
        window.Promise = $q;
    });
    module.config(function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|data):/);
        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    });
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
    var Finger;
    (function (Finger) {
        Finger["L1"] = "L1";
        Finger["L2"] = "L2";
        Finger["L3"] = "L3";
        Finger["L4"] = "L4";
        Finger["L5"] = "L5";
        Finger["R1"] = "R1";
        Finger["R2"] = "R2";
        Finger["R3"] = "R3";
        Finger["R4"] = "R4";
        Finger["R5"] = "R5";
    })(Finger = app.Finger || (app.Finger = {}));
    app.Fingers = [
        Finger.L1,
        Finger.L2,
        Finger.L3,
        Finger.L4,
        Finger.L5,
        Finger.R1,
        Finger.R2,
        Finger.R3,
        Finger.R4,
        Finger.R5
    ];
})(app || (app = {}));

"use strict";
angular.module('app').directive('debounceMouseenter', function ($timeout) {
    return {
        link: function ($scope, $element, $attributes) {
            var timer;
            $element.on('mouseenter', function () {
                var timeoutSeconds = parseInt($attributes.debounceDuration);
                timeoutSeconds = !isNaN(timeoutSeconds) ? timeoutSeconds : 300;
                timer = $timeout(function () {
                    $scope.$eval($attributes.debounceMouseenter);
                }, timeoutSeconds);
            });
            $element.on('mouseleave', function () {
                $timeout.cancel(timer);
            });
        }
    };
});

"use strict";
var app;
(function (app) {
    var idCounter = 0;
    var FingerSelectorService = /** @class */ (function () {
        function FingerSelectorService($compile, $rootScope, $document) {
            this.$compile = $compile;
            this.$rootScope = $rootScope;
            this.$document = $document;
        }
        FingerSelectorService.prototype.selectFinger = function (element) {
            var _this = this;
            //create a new fingerSelector element
            return new Promise(function (resolve, reject) {
                var fingerSelectorElement;
                var $scope = _this.$rootScope.$new();
                var id = 'finger-selector-' + idCounter++;
                var coordinates = $(element).offset();
                //adjust the coordinates so that the item is centered 
                coordinates.top -= 95;
                coordinates.left -= 60;
                $scope.onclose = function () {
                    fingerSelectorElement.remove();
                    reject();
                };
                $scope.onselect = function (finger) {
                    fingerSelectorElement.remove();
                    resolve(finger);
                };
                var template = "\n                    <finger-selector id=\"" + id + "\" ng-mouseleave=\"onclose()\" onclose=\"onclose()\" onselect=\"onselect(finger)\" style=\"top:" + coordinates.top + "px;left:" + coordinates.left + "\"></finger-selector>\n                ";
                var linkFn = _this.$compile(template);
                var content = linkFn($scope);
                _this.$document.find('body').append(content);
                fingerSelectorElement = document.getElementById(id);
            });
        };
        return FingerSelectorService;
    }());
    app.FingerSelectorService = FingerSelectorService;
    angular.module('app').service('fingerSelectorService', FingerSelectorService);
})(app || (app = {}));

"use strict";
var app;
(function (app) {
    var components;
    (function (components) {
        var FingerSelectorComponent = /** @class */ (function () {
            function FingerSelectorComponent($element) {
                this.$element = $element;
                this.fingers = app.Fingers;
            }
            FingerSelectorComponent.prototype.close = function () {
                try {
                    this.onclose();
                }
                catch (e) { }
            };
            FingerSelectorComponent.prototype.selectFinger = function (finger) {
                this.onselect({ finger: finger });
            };
            return FingerSelectorComponent;
        }());
        components.FingerSelectorComponent = FingerSelectorComponent;
        angular.module('app').component('fingerSelector', {
            bindings: {
                onclose: '&',
                onselect: '&'
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
            function PianoComponent($element) {
                this.$element = $element;
                this.keySelection = {
                    'C#3': {
                        finger: app.Finger.L1,
                        key: 'C#3'
                    }
                };
                this.onchange = function () { };
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
            Object.defineProperty(PianoComponent.prototype, "beginsWithBlackKey", {
                get: function () {
                    return app.BlackKeys.indexOf(this.beginKey) > -1;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PianoComponent.prototype, "endsWithBlackKey", {
                get: function () {
                    return app.BlackKeys.indexOf(this.endKey) > -1;
                },
                enumerable: true,
                configurable: true
            });
            PianoComponent.prototype.toggleKeySelection = function (key) {
                if (this.keySelection[key]) {
                    delete this.keySelection[key];
                }
                else {
                    this.keySelection[key] = {
                        key: key,
                        finger: undefined,
                        hand: undefined
                    };
                }
                this.triggerChanged();
            };
            PianoComponent.prototype.keyIsSelected = function (key) {
                return this.keySelection[key] !== undefined;
            };
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
                this.triggerChanged();
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
                return app.AllKeys.slice(beginIndex, endIndex + 1);
            };
            PianoComponent.prototype.triggerChanged = function () {
                this.onchange();
            };
            return PianoComponent;
        }());
        components.PianoComponent = PianoComponent;
        angular.module('app').component('piano', {
            bindings: {
                beginKey: '@',
                endKey: '@',
                onchange: '&'
            }
        });
    })(components = app.components || (app.components = {}));
})(app || (app = {}));

"use strict";
var app;
(function (app) {
    var components;
    (function (components) {
        var pianoIdCounter = 1;
        var PianoChordNotatorComponent = /** @class */ (function () {
            function PianoChordNotatorComponent($timeout) {
                this.$timeout = $timeout;
                this.whiteKeys = app.WhiteKeys;
                this.beginKey = app.Key.c3;
                this.endKey = app.Key.c4;
                this.pianoId = 'piano-' + pianoIdCounter++;
            }
            PianoChordNotatorComponent.prototype.$onInit = function () {
                this.changed();
            };
            PianoChordNotatorComponent.prototype.getRemainingKeys = function (key) {
                var index = app.WhiteKeys.indexOf(key);
                if (index === -1) {
                    throw new Error("Unknown key: '" + key);
                }
                return app.WhiteKeys.slice(index);
            };
            /**
             * Called every time the piano changes
             */
            PianoChordNotatorComponent.prototype.changed = function () {
                var _this = this;
                this.downloadUrl = undefined;
                //let the UI finish rendering
                this.$timeout(100).then(function () {
                    var element = document.getElementById(_this.pianoId);
                    return html2canvas(element);
                }).then(function (canvas) {
                    _this.downloadUrl = canvas.toDataURL('image/png');
                });
            };
            PianoChordNotatorComponent.prototype.addLowerKey = function () {
                var index = app.WhiteKeys.indexOf(this.beginKey);
                this.beginKey = app.WhiteKeys[index - 1];
            };
            PianoChordNotatorComponent.prototype.addHigherKey = function () {
                var index = app.WhiteKeys.indexOf(this.endKey);
                this.endKey = app.WhiteKeys[index + 1];
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
        var PianoKeyComponent = /** @class */ (function () {
            function PianoKeyComponent($element, fingerSelectorService) {
                this.$element = $element;
                this.fingerSelectorService = fingerSelectorService;
                this._isSelected = false;
                this.onchange = function () { };
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
            Object.defineProperty(PianoKeyComponent.prototype, "isSelected", {
                /**
                 * @Input
                 */
                get: function () {
                    return this._isSelected;
                },
                set: function (value) {
                    this._isSelected = value;
                    this.updateElementClass();
                },
                enumerable: true,
                configurable: true
            });
            PianoKeyComponent.prototype.updateElementClass = function () {
                this.$element.removeClass('white-key').removeClass('black-key');
                this.$element.addClass(this.isWhiteKey ? 'white-key' : 'black-key');
                this.$element.removeClass('selected');
                if (this.isSelected) {
                    this.$element.addClass('selected');
                }
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
            PianoKeyComponent.prototype.showFingerSelector = function () {
                var _this = this;
                var element = this.$element.find('.selected-finger')[0];
                this.fingerSelectorService.selectFinger(element).then(function (finger) {
                    _this.finger = finger;
                    _this.triggerChanged();
                }, function () {
                    //do nothing with the rejection: user canceled.
                });
            };
            PianoKeyComponent.prototype.triggerChanged = function () {
                try {
                    this.onchange();
                }
                catch (e) { }
            };
            return PianoKeyComponent;
        }());
        components.PianoKeyComponent = PianoKeyComponent;
        angular.module('app').component('pianoKey', {
            bindings: {
                key: '=',
                finger: '=',
                isSelected: '=',
                onchange: '&'
            }
        });
    })(components = app.components || (app.components = {}));
})(app || (app = {}));

//# sourceMappingURL=app.js.map
