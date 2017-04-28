angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = ""
    })
    .controller('MapController', function($scope) {
        $scope.title = ""
    })
    .controller('FormController', function($scope) {
        $scope.title = "Form"
    })
    .controller('IslandsController', function($scope) {
        $scope.title = "Islands"
    })
    .controller('RegisterController', function($scope) {
        $scope.registrationUser = {};

        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {


                validation code


                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;
            }
 
            console.log($scope.registrationUser.username + " " + $scope.registrationUser.password);
        };
 });
