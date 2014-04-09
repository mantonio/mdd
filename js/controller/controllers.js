app.controller('MainController', ['$scope', '$http',
    function($scope, $http) {

        $http.get('../js/fsItems.json').success(function(data) {

            $scope.fsItems = data;

        });

        $http.get('../js/workItems.json').success(function(data) {

            $scope.workItems = data;

        });

        // $scope.getClass = function(path) {
        //     if ($location.path().substr(0, path.length) == path) {
        //         return "active"
        //     } else {
        //         return ""
        //     }
        // }
    }
]);

app.filter('partition', function($cacheFactory) {
    var arrayCache = $cacheFactory('partition');
    var filter = function(arr, size) {
        if (!arr) {
            return;
        }
        var newArr = [];
        for (var i = 0; i < arr.length; i += size) {
            newArr.push(arr.slice(i, i + size));
        }
        var cachedParts;
        var arrString = JSON.stringify(arr);
        cachedParts = arrayCache.get(arrString + size);
        if (JSON.stringify(cachedParts) === JSON.stringify(newArr)) {
            return cachedParts;
        }
        arrayCache.put(arrString + size, newArr);
        return newArr;
    };
    return filter;
});
