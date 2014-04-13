app.controller('DetailController', ['$scope', '$http', '$location', '$routeParams',
    function($scope, $http, $location, $routeParams) {

        //Get data from JSON file for Detail Page
        $http.get('js/app/'+$routeParams.type+'.json').success(function(data) {

            $scope.detailItems = data;
            $scope.itemSelected = $routeParams.itemId;

            //Navigation for portfolio item in detail view
            if($routeParams.itemId > 0 ) {

                $scope.prevItem = Number($routeParams.itemId) - 1;

            }else {

                $scope.prevItem = $scope.fsItems.length - 1;
                $scope.prevItem = $scope.workItems.length - 1;

            }

             if($routeParams.itemId < $scope.fsItems.length - 1 || $routeParams.itemId < $scope.workItems.length - 1) {

                $scope.nextItem = Number($routeParams.itemId) + 1;

            }else {

                $scope.nextItem = 0;

            }

            //Get random images for the detail view
            $scope.random = function() {
                var fsNum = Math.floor(Math.random() * $scope.fsItems.length);
                var workNum = Math.floor(Math.random() * $scope.workItems.length);
                console.log(num);
                return fsNum, workNum;
            }

        });

    }
]);
