angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('piano.html','<piano-key ng-repeat="key in vm.keyRange" key="{{key}}"></piano-key>\r\n');
$templateCache.put('pianoChordNotator.html','<div class="toolbar">\r\n    <select ng-model="vm.beginKey" ng-options="key as key for key in vm.whiteKeys"></select>\r\n    <select ng-model="vm.endKey" ng-options="key as key for key in vm.getRemainingKeys(vm.beginKey)"></select>\r\n\r\n    <button ng-click="vm.export()">Download</button>\r\n</div>\r\n<div class="add-button-container">\r\n    <button ng-click="vm.addLowerKey()">+</button>\r\n</div>\r\n<piano id="{{vm.pianoId}}" begin-key="{{vm.beginKey}}" end-key="{{vm.endKey}}"></piano>\r\n<div class="add-button-container">\r\n    <button ng-click="vm.addHigherKey()">+</button>\r\n</div>\r\n<div class="clearfix"></div>');
$templateCache.put('pianoKey.html','<div ng-class="vm.isWhiteKey? \'white-key\': \'black-key\'">\r\n    <div class="finger-number">1</div>\r\n</div>');}]);
//# sourceMappingURL=templates.js.map
