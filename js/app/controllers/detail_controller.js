app.controller('DetailController', ['$scope', '$http', '$location', '$routeParams',
    function($scope, $http, $location, $routeParams) {

        //Get data from JSON file for Detail Page
        $http.get('js/app/detail.json').success(function(data) {

            $scope.detailItems = data;
            $scope.itemSelected = $routeParams.itemId;

            if($routeParams.itemId > 0) {

                $scope.prevItem = Number($routeParams.itemId) - 1;

            }else {

                $scope.prevItem = $scope.detailItems.length - 1;

            }

             if($routeParams.itemId < $scope.detailItems.length - 1) {

                $scope.nextItem = Number($routeParams.itemId) + 1;

            }else {

                $scope.nextItem = 0;

            }

        });

    }
]);
