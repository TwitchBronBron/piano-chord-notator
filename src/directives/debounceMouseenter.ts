angular.module('app').directive('debounceMouseenter', function ($timeout: ng.ITimeoutService) {
    return {
        link: function ($scope, $element, $attributes) {
            var timer: ng.IPromise<void>;
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