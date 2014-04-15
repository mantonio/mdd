app.controller('DetailController', ['$scope', '$http', '$location', '$routeParams',
    function($scope, $http, $location, $routeParams) {

        //Get data from JSON file for Detail Page
        $http.get('js/app/' + $routeParams.type + '.json').success(function(data) {

            $scope.detailItems = data;
            $scope.itemSelected = $routeParams.itemId;
            $scope.itemType = $routeParams.type;

            //Navigation for portfolio item in detail view
            if ($routeParams.itemId > 0) {

                $scope.prevItem = Number($routeParams.itemId) - 1;

            } else {

                $scope.prevItem = data.length - 1;
                //$scope.prevItem = $scope.workItems.length - 1;

            }

            if ($routeParams.itemId < data.length - 1 /*|| $routeParams.itemId < $scope.workItems.length - 1*/) {

                $scope.nextItem = Number($routeParams.itemId) + 1;

            } else {

                $scope.nextItem = 0;

            }
  $scope.randNum = Math.floor(Math.random() * data.length);


        });
//Get random images for the detail view
            $scope.random = function() {
                return $scope.randNum;
            }
            
                
                
              
                
            
    }
]);
