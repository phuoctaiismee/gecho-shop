app.controller('fillProducts',function($scope, $http){
$http({
    method : "GET",
        url : "http://localhost:3000/products"
    }).then(function mySuccess(response) {
        $scope.products = response.data;
        console.log($scope.products);
    }, function myError(response) {
        console.log('Eror')
    });
});