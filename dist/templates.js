angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('piano.html','<piano-key ng-repeat="key in vm.keyRange" key="key"></piano-key>');
$templateCache.put('pianoChordNotator.html','<piano id="{{vm.pianoId}}" begin-key="C3" end-key="C4"></piano>\r\n<button ng-click="vm.export()">Download</button>\r\n<div class="clearfix"></div>\r\n');
$templateCache.put('pianoKey.html','<div ng-class="vm.isWhiteKey? \'white-key\': \'black-key\'">\r\n    <div class="finger-number">1</div>\r\n</div>');}]);
//# sourceMappingURL=templates.js.map
