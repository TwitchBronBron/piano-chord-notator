angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('piano.html','<piano-key ng-repeat="key in vm.keyRange" key="key"></piano-key>');
$templateCache.put('pianoKey.html','<div  ng-class="vm.isWhiteKey? \'white-key\': \'black-key\'">\r\n</div>\r\n');}]);
//# sourceMappingURL=templates.js.map
