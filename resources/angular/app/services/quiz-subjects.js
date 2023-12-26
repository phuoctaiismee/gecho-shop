app.controller('fillDataSubjects',function($scope, $http,$timeout){
    $scope.subjects = [];
    $http({
        method : "GET",
            url : API_URL + 'subjects'
        }).then(function mySuccess(response) {
            $scope.subjects = response.data;
            // console.log($scope.subjects);
        }, function myError(response) {
            console.log('Eror')
        });


    $scope.getId = function(id){
        console.log(id)
        $scope.quizs = [];
        $scope.data = [];
        $http({
            method : "GET",
                url : API_URL + 'quizs/?id='+ id
            }).then(function mySuccess(response) {
                $scope.data = response.data;
                $scope.quizs = $scope.data[0].data;
                console.log($scope.quizs);
                // Timer for Quiz 
                $scope.counter = 600;
                $scope.onTimeout = function() {
                    if ($scope.counter > 0) $scope.counter--;
                    mytimeout = $timeout($scope.onTimeout, 1000);
                }
                var mytimeout = $timeout($scope.onTimeout, 1000);
                $scope.begin = 0;
                $scope.pageCount = Math.ceil($scope.quizs.length /1);
            }, function myError(response) {
                console.log('Eror')
            });   
              //Pagination
        $scope.prev = function(){
            // if($scope.begin > 0){
                $scope.begin -= 1;
            // }
        }
        $scope.next = function(){
            // if($scope.begin < ($scope.pageCount - 1)* 1){
                $scope.begin += 1;
            // }
            console.log('next')
        }
    }
    
});


app.filter('secondsToDateTime', [function() {
    return function(seconds) {
    return new Date(1970, 0, 1).setSeconds(seconds);
    };
}])

