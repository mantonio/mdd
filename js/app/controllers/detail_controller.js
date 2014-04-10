app.controller('DetailController', ['$scope', '$http', '$location', '$routeParams',
    function($scope, $http, $location, $routeParams) {

        //Get data from JSON file for Detail Page
        $http.get('js/app/detail.json').success(function(data) {

            $scope.detailItems = data;
            $scope.whichItem = $routeParams.itemId;

        });

    }
]);
