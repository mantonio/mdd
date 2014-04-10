app.controller('ListController', ['$scope', '$http', '$location',
    function($scope, $http, $location) {

        $scope.location = $location;

        //Get data from JSON file for Full Sail Portfolio
        $http.get('../js/app/fsItems.json').success(function(data) {

            $scope.fsItems = data;

        });

        //Get data from JSON file for Work Portfolio
        $http.get('../js/app/workItems.json').success(function(data) {

            $scope.workItems = data;

        });
    }
]);


