angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('fingerSelector.html','<div ng-repeat="finger in vm.fingers" class="finger-number {{finger}}" ng-click="vm.selectFinger(finger)">\r\n    {{finger}}\r\n</div>\r\n<div class="finger-number close" ng-click="vm.close()">&times;</div>');
$templateCache.put('piano.html','<piano-key ng-click="vm.keyClick(key)" onchange="vm.triggerChanged()" ng-repeat="key in vm.keyRange" \r\n    show-key="vm.shouldShowKey(key)"\r\n    key="key" finger="vm.keySelection[key].finger"\r\n    is-selected="vm.keySelection[key] !== undefined"></piano-key>');
$templateCache.put('pianoChordNotator.html','<div class="toolbar-container">\r\n    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">\r\n        <button class="btn btn-secondary mr-2 mt-2" ng-click="vm.clearSelection()">\r\n            <i class="fa fa-refresh mr-1"></i>\r\n            Clear Selection\r\n        </button>\r\n        <button class="btn btn-secondary  mr-2 mt-2" ng-click="vm.playChord()">\r\n            <i class="fa fa-play mr-1"></i>\r\n            Play Chord\r\n        </button>\r\n        <div class="btn-group mr-2 mt-2" role="group">\r\n            <button id="btnGroupDrop1" ng-click="vm.generateImage()" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown"\r\n                aria-haspopup="true" aria-expanded="false">\r\n                Generate Image\r\n            </button>\r\n            <div class="dropdown-menu text-center" aria-labelledby="btnGroupDrop1" style="width:300px;">\r\n                <a class="dropdown-item" download="export.png" ng-href="{{vm.downloadUrl}}">\r\n                    <div ng-if="!vm.downloadUrl">\r\n                        <img src="content/ajax-loader.gif" /> Generating Image\r\n                    </div>\r\n                    <span class="btn btn-secondary mr-2 mt-2" target="_self" ng-if="vm.downloadUrl">\r\n                        <i class="fa fa-download mr-1"></i>Download\r\n                    </span>\r\n                    <img  ng-if="vm.downloadUrl" ng-src="{{vm.downloadUrl}}" class="block w-100 mt-2 download-image" />\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class="btn-group mr-2 mt-2" role="group">\r\n            <button id="btnGroupDrop1" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\r\n                Share\r\n            </button>\r\n            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">\r\n                <label class="dropdown-item">\r\n                    <a ng-href="{{vm.shareUrl}}" target="_blank">Share Link</a>\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class="btn-group mr-2 mt-2 options-dropdown" role="group">\r\n            <button id="btnGroupDrop1" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\r\n                <i class="fa fa-cog mr-2"></i>Options\r\n            </button>\r\n            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">\r\n                <label class="dropdown-item" onclick="event.stopPropagation()">\r\n                    <input type="checkbox" ng-model="vm.showOctaveIndicator" ng-model-options="{getterSetter: true}" />&nbsp;Show octave indicator\r\n                </label>\r\n                <label class="dropdown-item" onclick="event.stopPropagation()">\r\n                    <input type="checkbox" ng-model="vm.playKeyWhenPressed" />&nbsp;Play key when pressed\r\n                </label>\r\n                <label class="dropdown-item volume-dropdown-item" onclick="event.stopPropagation()">\r\n                    <b class="block">Volume</b>\r\n                    <span class="inline-block" style="width:90%">\r\n                        <input type="range" min="0" max="100" ng-model="vm.volume" id="myRange">\r\n                    </span>\r\n                    <span class="inline-block">\r\n                        <span>{{vm.volume}}</span>\r\n                    </span>\r\n                </label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class="piano-container px-2">\r\n    <div class="add-button-container low">\r\n        <select class="mb-2 form-control p-0" ng-model="vm.beginKey" ng-options="key as key for key in vm.whiteKeys"></select>\r\n        <button class="btn btn-secondary w-100" ng-click="vm.addLowerKey()">+</button>\r\n    </div>\r\n    <div class="inner-piano-container" id="{{vm.pianoId}}">\r\n        <input type="text" class="chord-name" ng-model="vm.chordName" onclick="this.select()" ng-model-options="{getterSetter: true}"\r\n        />\r\n        <piano play-key-when-pressed="vm.playKeyWhenPressed" key-selection="vm.keySelection" begin-key="{{vm.beginKey}}" end-key="{{vm.endKey}}"\r\n            onchange="vm.changed()"></piano>\r\n    </div>\r\n\r\n    <div class="add-button-container high">\r\n        <select class="mb-2 form-control p-0" ng-model="vm.endKey" ng-options="key as key for key in vm.getRemainingKeys(vm.beginKey)"></select>\r\n        <button class="btn btn-secondary w-100" ng-click="vm.addHigherKey()">+</button>\r\n    </div>\r\n</div>');
$templateCache.put('pianoKey.html','<div class="finger-number selected-finger" ng-if="vm.isSelected" debounce-mouseenter="vm.showFingerSelector()" ng-click="vm.showFingerSelector();$event.stopPropagation()">\r\n    <span class="finger-number-value">\r\n        {{vm.finger? vm.finger: \'?\'}}\r\n    </span>\r\n</div>\r\n<div class="key" ng-if="vm.showKey">{{vm.key}}</div>\r\n<div ng-if="vm.isSelected" class="note" ng-click="vm.toggleEnharmonic($event)">\r\n    {{vm.enharmonic}}\r\n</div>');}]);
//# sourceMappingURL=templates.js.map
