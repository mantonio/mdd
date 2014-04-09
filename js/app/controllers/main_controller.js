app.controller('MainController', ['$scope', '$http', '$location',
    function($scope, $http, $location) {

        $scope.location = $location;

        //Get data from JSON file
        $http.get('../js/app/fsItems.json').success(function(data) {

            $scope.fsItems = data;

        });

        //Get data from JSON file
        $http.get('../js/app/workItems.json').success(function(data) {

            $scope.workItems = data;

        });

        $scope.isActive = function(route) {

            return route === $location.path();
            
        }

        // $scope.getClass = function(path) {
        //     if ($location.path().substr(0, path.length) == path) {
        //         return "active"
        //     } else {
        //         return ""
        //     }
        // }
    }
]);


