(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.dishes = "";
        $scope.message = "";

        $scope.checkIfTooMuch = function () {
            if ($scope.dishes) {
                var arrayOfDishes = $scope.dishes.split(',');
                $scope.message = calcDishes(arrayOfDishes);
                $scope.color = "green"
            } else {
                $scope.message = "Please enter data first";
                $scope.color = "red"
            }
        };

        function calcDishes(arrayOfDishes) {
            return arrayOfDishes.length <= 3 ? "Enjoy!" : "Too much!"
        }
    }
})();