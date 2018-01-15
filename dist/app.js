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
    //enable html5 url mode
    module.config(function ($locationProvider) {
        $locationProvider.html5Mode(true);
    });
})(app || (app = {}));

"use strict";
var app;
(function (app) {
    app.AudioFiles = {
        '148401__neatonk__piano-loud-bb5.aac': '148401__neatonk__piano-loud-bb5.aac',
        '148402__neatonk__piano-loud-bb6.aac': '148402__neatonk__piano-loud-bb6.aac',
        '148403__neatonk__piano-loud-b7.aac': '148403__neatonk__piano-loud-b7.aac',
        '148404__neatonk__piano-loud-bb0.aac': '148404__neatonk__piano-loud-bb0.aac',
        '148405__neatonk__piano-loud-b5.aac': '148405__neatonk__piano-loud-b5.aac',
        '148406__neatonk__piano-loud-b6.aac': '148406__neatonk__piano-loud-b6.aac',
        '148407__neatonk__piano-loud-bb3.aac': '148407__neatonk__piano-loud-bb3.aac',
        '148408__neatonk__piano-loud-bb4.aac': '148408__neatonk__piano-loud-bb4.aac',
        '148423__neatonk__piano-loud-bb1.aac': '148423__neatonk__piano-loud-bb1.aac',
        '148424__neatonk__piano-loud-bb2.aac': '148424__neatonk__piano-loud-bb2.aac',
        '148425__neatonk__piano-loud-d1.aac': '148425__neatonk__piano-loud-d1.aac',
        '148426__neatonk__piano-loud-c8.aac': '148426__neatonk__piano-loud-c8.aac',
        '148427__neatonk__piano-loud-c1.aac': '148427__neatonk__piano-loud-c1.aac',
        '148428__neatonk__piano-loud-bb7.aac': '148428__neatonk__piano-loud-bb7.aac',
        '148429__neatonk__piano-loud-c3.aac': '148429__neatonk__piano-loud-c3.aac',
        '148430__neatonk__piano-loud-c2.aac': '148430__neatonk__piano-loud-c2.aac',
        '148431__neatonk__piano-loud-c5.aac': '148431__neatonk__piano-loud-c5.aac',
        '148432__neatonk__piano-loud-c4.aac': '148432__neatonk__piano-loud-c4.aac',
        '148433__neatonk__piano-loud-c7.aac': '148433__neatonk__piano-loud-c7.aac',
        '148434__neatonk__piano-loud-c6.aac': '148434__neatonk__piano-loud-c6.aac',
        '148435__neatonk__piano-loud-gb4.aac': '148435__neatonk__piano-loud-gb4.aac',
        '148436__neatonk__piano-loud-gb5.aac': '148436__neatonk__piano-loud-gb5.aac',
        '148437__neatonk__piano-loud-gb6.aac': '148437__neatonk__piano-loud-gb6.aac',
        '148438__neatonk__piano-loud-gb7.aac': '148438__neatonk__piano-loud-gb7.aac',
        '148439__neatonk__piano-loud-g7.aac': '148439__neatonk__piano-loud-g7.aac',
        '148440__neatonk__piano-loud-gb1.aac': '148440__neatonk__piano-loud-gb1.aac',
        '148441__neatonk__piano-loud-gb2.aac': '148441__neatonk__piano-loud-gb2.aac',
        '148442__neatonk__piano-loud-gb3.aac': '148442__neatonk__piano-loud-gb3.aac',
        '148471__neatonk__piano-loud-ab6.aac': '148471__neatonk__piano-loud-ab6.aac',
        '148472__neatonk__piano-loud-ab5.aac': '148472__neatonk__piano-loud-ab5.aac',
        '148473__neatonk__piano-loud-ab4.aac': '148473__neatonk__piano-loud-ab4.aac',
        '148474__neatonk__piano-loud-ab3.aac': '148474__neatonk__piano-loud-ab3.aac',
        '148475__neatonk__piano-loud-b2.aac': '148475__neatonk__piano-loud-b2.aac',
        '148476__neatonk__piano-loud-b1.aac': '148476__neatonk__piano-loud-b1.aac',
        '148477__neatonk__piano-loud-b0.aac': '148477__neatonk__piano-loud-b0.aac',
        '148478__neatonk__piano-loud-ab7.aac': '148478__neatonk__piano-loud-ab7.aac',
        '148479__neatonk__piano-loud-b4.aac': '148479__neatonk__piano-loud-b4.aac',
        '148480__neatonk__piano-loud-b3.aac': '148480__neatonk__piano-loud-b3.aac',
        '148481__neatonk__piano-loud-a3.aac': '148481__neatonk__piano-loud-a3.aac',
        '148482__neatonk__piano-loud-a2.aac': '148482__neatonk__piano-loud-a2.aac',
        '148483__neatonk__piano-loud-a1.aac': '148483__neatonk__piano-loud-a1.aac',
        '148484__neatonk__piano-loud-a0.aac': '148484__neatonk__piano-loud-a0.aac',
        '148485__neatonk__piano-loud-a7.aac': '148485__neatonk__piano-loud-a7.aac',
        '148486__neatonk__piano-loud-a6.aac': '148486__neatonk__piano-loud-a6.aac',
        '148487__neatonk__piano-loud-a5.aac': '148487__neatonk__piano-loud-a5.aac',
        '148488__neatonk__piano-loud-a4.aac': '148488__neatonk__piano-loud-a4.aac',
        '148489__neatonk__piano-loud-ab2.aac': '148489__neatonk__piano-loud-ab2.aac',
        '148490__neatonk__piano-loud-ab1.aac': '148490__neatonk__piano-loud-ab1.aac',
        '148491__neatonk__piano-loud-eb7.aac': '148491__neatonk__piano-loud-eb7.aac',
        '148492__neatonk__piano-loud-f1.aac': '148492__neatonk__piano-loud-f1.aac',
        '148493__neatonk__piano-loud-eb5.aac': '148493__neatonk__piano-loud-eb5.aac',
        '148494__neatonk__piano-loud-eb6.aac': '148494__neatonk__piano-loud-eb6.aac',
        '148495__neatonk__piano-loud-eb3.aac': '148495__neatonk__piano-loud-eb3.aac',
        '148496__neatonk__piano-loud-eb4.aac': '148496__neatonk__piano-loud-eb4.aac',
        '148497__neatonk__piano-loud-eb1.aac': '148497__neatonk__piano-loud-eb1.aac',
        '148498__neatonk__piano-loud-eb2.aac': '148498__neatonk__piano-loud-eb2.aac',
        '148499__neatonk__piano-loud-f2.aac': '148499__neatonk__piano-loud-f2.aac',
        '148500__neatonk__piano-loud-f3.aac': '148500__neatonk__piano-loud-f3.aac',
        '148501__neatonk__piano-loud-g2.aac': '148501__neatonk__piano-loud-g2.aac',
        '148502__neatonk__piano-loud-g1.aac': '148502__neatonk__piano-loud-g1.aac',
        '148503__neatonk__piano-loud-g4.aac': '148503__neatonk__piano-loud-g4.aac',
        '148504__neatonk__piano-loud-g3.aac': '148504__neatonk__piano-loud-g3.aac',
        '148505__neatonk__piano-loud-f5.aac': '148505__neatonk__piano-loud-f5.aac',
        '148506__neatonk__piano-loud-f4.aac': '148506__neatonk__piano-loud-f4.aac',
        '148507__neatonk__piano-loud-f7.aac': '148507__neatonk__piano-loud-f7.aac',
        '148508__neatonk__piano-loud-f6.aac': '148508__neatonk__piano-loud-f6.aac',
        '148509__neatonk__piano-loud-g6.aac': '148509__neatonk__piano-loud-g6.aac',
        '148510__neatonk__piano-loud-g5.aac': '148510__neatonk__piano-loud-g5.aac',
        '148511__neatonk__piano-loud-d2.aac': '148511__neatonk__piano-loud-d2.aac',
        '148512__neatonk__piano-loud-d3.aac': '148512__neatonk__piano-loud-d3.aac',
        '148513__neatonk__piano-loud-d4.aac': '148513__neatonk__piano-loud-d4.aac',
        '148514__neatonk__piano-loud-d5.aac': '148514__neatonk__piano-loud-d5.aac',
        '148515__neatonk__piano-loud-d6.aac': '148515__neatonk__piano-loud-d6.aac',
        '148516__neatonk__piano-loud-d7.aac': '148516__neatonk__piano-loud-d7.aac',
        '148517__neatonk__piano-loud-db1.aac': '148517__neatonk__piano-loud-db1.aac',
        '148518__neatonk__piano-loud-db2.aac': '148518__neatonk__piano-loud-db2.aac',
        '148519__neatonk__piano-loud-db3.aac': '148519__neatonk__piano-loud-db3.aac',
        '148520__neatonk__piano-loud-db4.aac': '148520__neatonk__piano-loud-db4.aac',
        '148521__neatonk__piano-loud-e7.aac': '148521__neatonk__piano-loud-e7.aac',
        '148522__neatonk__piano-loud-e6.aac': '148522__neatonk__piano-loud-e6.aac',
        '148523__neatonk__piano-loud-e5.aac': '148523__neatonk__piano-loud-e5.aac',
        '148524__neatonk__piano-loud-e4.aac': '148524__neatonk__piano-loud-e4.aac',
        '148525__neatonk__piano-loud-e3.aac': '148525__neatonk__piano-loud-e3.aac',
        '148526__neatonk__piano-loud-e2.aac': '148526__neatonk__piano-loud-e2.aac',
        '148527__neatonk__piano-loud-e1.aac': '148527__neatonk__piano-loud-e1.aac',
        '148528__neatonk__piano-loud-db7.aac': '148528__neatonk__piano-loud-db7.aac',
        '148529__neatonk__piano-loud-db6.aac': '148529__neatonk__piano-loud-db6.aac',
        '148530__neatonk__piano-loud-db5.aac': '148530__neatonk__piano-loud-db5.aac',
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
        Note["dflat"] = "Db";
        Note["d"] = "D";
        Note["eflat"] = "Eb";
        Note["e"] = "E";
        Note["f"] = "F";
        Note["gflat"] = "Gb";
        Note["g"] = "G";
        Note["aflat"] = "Ab";
        Note["a"] = "A";
        Note["bflat"] = "Bb";
        Note["b"] = "B";
    })(Note = app.Note || (app.Note = {}));
    /**
     * An absolute reference to a specific key on a piano.
     */
    var Key;
    (function (Key) {
        Key["a0"] = "A0";
        Key["bflat0"] = "Bb0";
        Key["b0"] = "B0";
        Key["c1"] = "C1";
        Key["dflat1"] = "Db1";
        Key["d1"] = "D1";
        Key["eflat1"] = "Eb1";
        Key["e1"] = "E1";
        Key["f1"] = "F1";
        Key["gflat1"] = "Gb1";
        Key["g1"] = "G1";
        Key["aflat1"] = "Ab1";
        Key["a1"] = "A1";
        Key["bflat1"] = "Bb1";
        Key["b1"] = "B1";
        Key["c2"] = "C2";
        Key["dflat2"] = "Db2";
        Key["d2"] = "D2";
        Key["eflat2"] = "Eb2";
        Key["e2"] = "E2";
        Key["f2"] = "F2";
        Key["gflat2"] = "Gb2";
        Key["g2"] = "G2";
        Key["aflat2"] = "Ab2";
        Key["a2"] = "A2";
        Key["bflat2"] = "Bb2";
        Key["b2"] = "B2";
        Key["c3"] = "C3";
        Key["dflat3"] = "Db3";
        Key["d3"] = "D3";
        Key["eflat3"] = "Eb3";
        Key["e3"] = "E3";
        Key["f3"] = "F3";
        Key["gflat3"] = "Gb3";
        Key["g3"] = "G3";
        Key["aflat3"] = "Ab3";
        Key["a3"] = "A3";
        Key["bflat3"] = "Bb3";
        Key["b3"] = "B3";
        Key["c4"] = "C4";
        Key["dflat4"] = "Db4";
        Key["d4"] = "D4";
        Key["eflat4"] = "Eb4";
        Key["e4"] = "E4";
        Key["f4"] = "F4";
        Key["gflat4"] = "Gb4";
        Key["g4"] = "G4";
        Key["aflat4"] = "Ab4";
        Key["a4"] = "A4";
        Key["bflat4"] = "Bb4";
        Key["b4"] = "B4";
        Key["c5"] = "C5";
        Key["dflat5"] = "Db5";
        Key["d5"] = "D5";
        Key["eflat5"] = "Eb5";
        Key["e5"] = "E5";
        Key["f5"] = "F5";
        Key["gflat5"] = "Gb5";
        Key["g5"] = "G5";
        Key["aflat5"] = "Ab5";
        Key["a5"] = "A5";
        Key["bflat5"] = "Bb5";
        Key["b5"] = "B5";
        Key["c6"] = "C6";
        Key["dflat6"] = "Db6";
        Key["d6"] = "D6";
        Key["eflat6"] = "Eb6";
        Key["e6"] = "E6";
        Key["f6"] = "F6";
        Key["gflat6"] = "Gb6";
        Key["g6"] = "G6";
        Key["aflat6"] = "Ab6";
        Key["a6"] = "A6";
        Key["bflat6"] = "Bb6";
        Key["b6"] = "B6";
        Key["c7"] = "C7";
        Key["dflat7"] = "Db7";
        Key["d7"] = "D7";
        Key["eflat7"] = "Eb7";
        Key["e7"] = "E7";
        Key["f7"] = "F7";
        Key["gflat7"] = "Gb7";
        Key["g7"] = "G7";
        Key["aflat7"] = "Ab7";
        Key["a7"] = "A7";
        Key["bflat7"] = "Bb7";
        Key["b7"] = "B7";
    })(Key = app.Key || (app.Key = {}));
    app.AllKeys = [
        Key.a0,
        Key.bflat0,
        Key.b0,
        Key.c1,
        Key.dflat1,
        Key.d1,
        Key.eflat1,
        Key.e1,
        Key.f1,
        Key.gflat1,
        Key.g1,
        Key.aflat1,
        Key.a1,
        Key.bflat1,
        Key.b1,
        Key.c2,
        Key.dflat2,
        Key.d2,
        Key.eflat2,
        Key.e2,
        Key.f2,
        Key.gflat2,
        Key.g2,
        Key.aflat2,
        Key.a2,
        Key.bflat2,
        Key.b2,
        Key.c3,
        Key.dflat3,
        Key.d3,
        Key.eflat3,
        Key.e3,
        Key.f3,
        Key.gflat3,
        Key.g3,
        Key.aflat3,
        Key.a3,
        Key.bflat3,
        Key.b3,
        Key.c4,
        Key.dflat4,
        Key.d4,
        Key.eflat4,
        Key.e4,
        Key.f4,
        Key.gflat4,
        Key.g4,
        Key.aflat4,
        Key.a4,
        Key.bflat4,
        Key.b4,
        Key.c5,
        Key.dflat5,
        Key.d5,
        Key.eflat5,
        Key.e5,
        Key.f5,
        Key.gflat5,
        Key.g5,
        Key.aflat5,
        Key.a5,
        Key.bflat5,
        Key.b5,
        Key.c6,
        Key.dflat6,
        Key.d6,
        Key.eflat6,
        Key.e6,
        Key.f6,
        Key.gflat6,
        Key.g6,
        Key.aflat6,
        Key.a6,
        Key.bflat6,
        Key.b6,
        Key.c7,
        Key.dflat7,
        Key.d7,
        Key.eflat7,
        Key.e7,
        Key.f7,
        Key.gflat7,
        Key.g7,
        Key.aflat7,
        Key.a7,
        Key.bflat7,
        Key.b7,
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
        Note.bflat,
        Note.dflat,
        Note.eflat,
        Note.gflat,
        Note.aflat
    ];
    app.WhiteKeys = app.AllKeys.filter(function (key) {
        return key.indexOf('b') === -1;
    });
    app.BlackKeys = app.AllKeys.filter(function (key) {
        return key.indexOf('b') > -1;
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
    app.NoteEnharmonics = {
        'C': 'B#',
        'B#': 'C',
        'C#': 'Db',
        'Db': 'C#',
        'D': 'D',
        'D#': 'Eb',
        'Eb': 'D#',
        'E': 'Fb',
        'Fb': 'E',
        'E#': 'F',
        'F': 'E#',
        'F#': 'Gb',
        'Gb': 'F#',
        'G': 'G',
        'G#': 'Ab',
        'Ab': 'G#',
        'A': 'A',
        'A#': 'Bb',
        'Bb': 'A#',
        'B': 'Cb',
        'Cb': 'B'
    };
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
    var AudioService = /** @class */ (function () {
        function AudioService() {
            this._volume = 100;
        }
        Object.defineProperty(AudioService.prototype, "volume", {
            get: function () {
                return this._volume;
            },
            set: function (value) {
                var intval = parseInt(value + '');
                var volume = isNaN(intval) ? 100 : intval;
                volume = volume < 0 ? 0 : volume;
                volume = volume > 100 ? 100 : volume;
                this._volume = value;
                Howler.volume(this._volume / 100);
            },
            enumerable: true,
            configurable: true
        });
        AudioService.prototype.playKeys = function (keys) {
            var urls = this.getKeyUrls(keys);
            for (var _i = 0, urls_1 = urls; _i < urls_1.length; _i++) {
                var url = urls_1[_i];
                var sound = new Howl({
                    src: [url]
                });
                sound.play();
            }
        };
        AudioService.prototype.getKeyUrls = function (keys) {
            var urls = [];
            var audioFileKeys = Object.keys(app.AudioFiles);
            var _loop_1 = function (key) {
                var matches = audioFileKeys.filter((function (x) {
                    return x.toLowerCase().indexOf('-' + key.toLowerCase()) > -1;
                }));
                if (matches.length === 1) {
                    var filePath = app.AudioFiles[matches[0]];
                    urls.push("audio/" + filePath);
                }
                else {
                    var message = "Unable to find a key url for '" + key;
                    alert(message);
                    throw new Error(message);
                }
            };
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                _loop_1(key);
            }
            return urls;
        };
        return AudioService;
    }());
    app.AudioService = AudioService;
    angular.module('app').service('audioService', AudioService);
})(app || (app = {}));

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
                coordinates.top -= 65;
                coordinates.left -= 30;
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
    function parseQueryString(querystring) {
        if (querystring.indexOf('?') === 0) {
            querystring = querystring.substring(1);
        }
        var vars = querystring.split("&");
        var result = {};
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            // If first entry with this name
            if (typeof result[pair[0]] === "undefined") {
                result[pair[0]] = decodeURIComponent(pair[1]);
                // If second entry with this name
            }
            else if (typeof result[pair[0]] === "string") {
                var arr = [result[pair[0]], decodeURIComponent(pair[1])];
                result[pair[0]] = arr;
                // If third or later entry with this name
            }
            else {
                result[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
        return result;
    }
    app.parseQueryString = parseQueryString;
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
            function PianoComponent($element, $scope, audioService) {
                var _this = this;
                this.$element = $element;
                this.$scope = $scope;
                this.audioService = audioService;
                this._showFingering = true;
                this.keySelection = {};
                this.onchange = function () { };
                $scope.$watch(function () {
                    return _this.keySelection;
                }, function () {
                    _this.triggerChanged();
                }, true);
            }
            Object.defineProperty(PianoComponent.prototype, "playKeyWhenPressed", {
                get: function () {
                    return this._playKeyWhenPressed ? true : false;
                },
                set: function (value) {
                    this._playKeyWhenPressed = value ? true : false;
                },
                enumerable: true,
                configurable: true
            });
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
            Object.defineProperty(PianoComponent.prototype, "showFingering", {
                get: function () {
                    return this._showFingering ? true : false;
                },
                set: function (value) {
                    this._showFingering = value ? true : false;
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
            PianoComponent.prototype.keyClick = function (key) {
                this.toggleKeySelection(key);
                this.playKey(key);
            };
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
            PianoComponent.prototype.playKey = function (key) {
                if (this.playKeyWhenPressed) {
                    this.audioService.playKeys([key]);
                }
            };
            /**
             * Determine whether the light-grey key should be displayed on the piano-key
             * @param key
             */
            PianoComponent.prototype.shouldShowKey = function (key) {
                if (/^C\d$/i.exec(key)) {
                    return true;
                }
                else {
                    return false;
                }
            };
            return PianoComponent;
        }());
        components.PianoComponent = PianoComponent;
        angular.module('app').component('piano', {
            bindings: {
                beginKey: '@',
                endKey: '@',
                onchange: '&',
                keySelection: '=',
                playKeyWhenPressed: '=',
                showFingering: '='
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
            function PianoChordNotatorComponent($timeout, audioService, $location, $element) {
                this.$timeout = $timeout;
                this.audioService = audioService;
                this.$location = $location;
                this.$element = $element;
                this.whiteKeys = app.WhiteKeys;
                this.defaultBeginKey = app.Key.c3;
                this.defaultEndKey = app.Key.g5;
                this.playKeyWhenPressed = false;
                this._showOctaveIndicator = false;
                this._volume = 50;
                this._showFingering = true;
                this.keySelection = {};
                this._chordName = 'Chord Name';
                this.pianoId = 'piano-' + pianoIdCounter++;
            }
            PianoChordNotatorComponent.prototype.$onInit = function () {
                this.reset();
                this.changed();
                this.loadDeepLinks();
            };
            Object.defineProperty(PianoChordNotatorComponent.prototype, "showOctaveIndicator", {
                get: function () {
                    return this._showOctaveIndicator;
                },
                set: function (value) {
                    this._showOctaveIndicator = value;
                    if (this.showOctaveIndicator === false) {
                        this.$element.addClass('hide-octave-indicator');
                    }
                    else {
                        this.$element.removeClass('hide-octave-indicator');
                    }
                    this.changed();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PianoChordNotatorComponent.prototype, "volume", {
                get: function () {
                    return this._volume;
                },
                set: function (value) {
                    var intval = parseInt(value + '');
                    this._volume = isNaN(intval) ? this._volume : intval;
                    this.audioService.volume = this._volume;
                    this.changed();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PianoChordNotatorComponent.prototype, "showFingering", {
                get: function () {
                    return this._showFingering ? true : false;
                },
                set: function (value) {
                    this._showFingering = value ? true : false;
                    this.changed();
                },
                enumerable: true,
                configurable: true
            });
            PianoChordNotatorComponent.prototype.loadDeepLinks = function () {
                var params = app.parseQueryString(location.search);
                this.beginKey = params.beginKey ? params.beginKey : this.beginKey;
                this.endKey = params.endKey ? params.endKey : this.endKey;
                this.chordName = params.chordName ? params.chordName : this.chordName;
                this.volume = params.volume ? params.volume : this.volume;
                this.showFingering = params.showFingering ?
                    (params.showFingering === 'undefined' || params.showFingering === true ? true : false) :
                    this.showFingering;
                this.showOctaveIndicator = params.showOctaveIndicator ?
                    (params.showOctaveIndicator === 'undefined' || params.showOctaveIndicator === true ? true : false) :
                    this.showOctaveIndicator;
                var keySelection = params.keySelection ? JSON.parse(params.keySelection) : undefined;
                this.keySelection = keySelection ? keySelection : this.keySelection;
            };
            PianoChordNotatorComponent.prototype.calculateShareUrl = function () {
                var params = {
                    beginKey: this.beginKey,
                    endKey: this.endKey,
                    keySelection: JSON.stringify(this.keySelection),
                    chordName: this.chordName,
                    showOctaveIndicator: this.showOctaveIndicator,
                    volume: this.volume,
                    showFingering: this.showFingering
                };
                this.$location.search(params);
                this.shareUrl = this.$location.absUrl();
            };
            PianoChordNotatorComponent.prototype.getRemainingKeys = function (key) {
                var index = app.WhiteKeys.indexOf(key);
                if (index === -1) {
                    throw new Error("Unknown key: '" + key);
                }
                return app.WhiteKeys.slice(index);
            };
            PianoChordNotatorComponent.prototype.clearSelection = function () {
                this.keySelection = {};
            };
            PianoChordNotatorComponent.prototype.reset = function () {
                this.beginKey = this.defaultBeginKey;
                this.endKey = this.defaultEndKey;
                this.clearSelection();
            };
            Object.defineProperty(PianoChordNotatorComponent.prototype, "chordName", {
                get: function () {
                    return this._chordName;
                },
                set: function (value) {
                    this._chordName = value;
                    this.changed();
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Called every time the piano changes
             */
            PianoChordNotatorComponent.prototype.changed = function () {
                this.calculateShareUrl();
            };
            PianoChordNotatorComponent.prototype.generateImage = function () {
                var _this = this;
                this.downloadUrl = undefined;
                //let the UI finish rendering
                var timeoutHandle = this.timeoutHandle = this.$timeout(100).then(function () {
                    if (timeoutHandle !== _this.timeoutHandle) {
                        return Promise.reject(new Error('Another change has occurred since we started'));
                    }
                    var element = document.getElementById(_this.pianoId);
                    var parent = element.parentElement;
                    var scrollAmount = parent.scrollLeft;
                    parent.scrollLeft = 0;
                    //temporarily force a width for the toolbar
                    var toolbarContainer = $('.toolbar-container');
                    var toolbarWidth = toolbarContainer.width();
                    toolbarContainer.css({
                        position: 'relative',
                        width: toolbarWidth,
                        left: scrollAmount + "px"
                    });
                    $('body').css({ width: parent.scrollWidth + "px" });
                    document.body.scrollLeft = scrollAmount;
                    // this.$element.addClass('text-left');
                    return html2canvas(element, {
                        onrendered: function (canvas) {
                            _this.$element.removeClass('text-left');
                            $('body').css({ width: '' });
                            parent.scrollLeft = scrollAmount;
                            toolbarContainer.css({
                                position: '',
                                width: '',
                                left: ''
                            });
                            document.body.scrollLeft = 0;
                        }
                    });
                }).then(function (canvas) {
                    _this.downloadUrl = canvas.toDataURL('image/png');
                }, function () {
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
            PianoChordNotatorComponent.prototype.playChord = function () {
                var keys = Object.keys(this.keySelection);
                this.audioService.playKeys(keys);
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
                this._showFingering = true;
                this.fingerSelectorIsVisible = false;
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
                    this.enharmonic = this.note;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PianoKeyComponent.prototype, "note", {
                get: function () {
                    return this.key.replace(/[1-7]/, '');
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
            Object.defineProperty(PianoKeyComponent.prototype, "showFingering", {
                get: function () {
                    return this._showFingering ? true : false;
                },
                set: function (value) {
                    this._showFingering = value ? true : false;
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
                //don't show the finger selector more than once at a time per key
                if (this.fingerSelectorIsVisible) {
                    return;
                }
                var element = this.$element.find('.selected-finger')[0];
                this.fingerSelectorIsVisible = true;
                this.fingerSelectorService.selectFinger(element).then(function (finger) {
                    _this.finger = finger;
                    _this.triggerChanged();
                    _this.fingerSelectorIsVisible = false;
                }, function () {
                    //do nothing with the rejection: user canceled.
                    _this.fingerSelectorIsVisible = false;
                });
            };
            PianoKeyComponent.prototype.triggerChanged = function () {
                try {
                    this.onchange();
                }
                catch (e) { }
            };
            PianoKeyComponent.prototype.toggleEnharmonic = function (event) {
                event.stopPropagation();
                this.enharmonic = app.NoteEnharmonics[this.enharmonic];
            };
            return PianoKeyComponent;
        }());
        components.PianoKeyComponent = PianoKeyComponent;
        angular.module('app').component('pianoKey', {
            bindings: {
                key: '=',
                finger: '=',
                isSelected: '=',
                onchange: '&',
                showKey: '<',
                showFingering: '='
            }
        });
    })(components = app.components || (app.components = {}));
})(app || (app = {}));

//# sourceMappingURL=app.js.map
