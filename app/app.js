angular.module('umanit', [])
    .controller('UmanitCtrl', function($scope, $http) {
        $scope.name = "Toto";

        $scope.age = [
            10,
            10,
            25
        ];

        $scope.isNameValid = function() {
            return $scope.name == "umanit";
        };

        $scope.getClass = function() {
            if ($scope.name == 'umanit') {
                return 'alert-success';
            }

            return 'alert-danger';
        };
    })
;
