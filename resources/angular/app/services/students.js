app.controller('fillStudents',function($scope, $http){
$http({
    method : "GET",
        url : "http://localhost:3000/students"
    }).then(function mySuccess(response) {
        $scope.students = response.data;
        console.log($scope.students)
    }, function myError(response) {
        console.log('Eror')
    });
    $scope.delData = function(id){
        console.log(id);
        $http({
            method: "DELETE",
            url: API_URL+"students/"+id,
        }).then(
            function success(response){
                alert('Xóa thành công');
            },
            function error(response){          
            },        
    )
    }
});

// SAVE Khachhang
app.controller('saveStudents', function($scope, $http) {
    $scope.saveData = function(){
        console.log($scope.student)
        $http({
            method: "POST",
            url: "http://localhost:3000/students",
            data: $scope.student
        }).then(
            function success(response){
                alert('Thêm thành công');
            },
            function error(response){          
            },        
    )
    }
});

// EDIT
app.controller('editStudents', function($scope, $http, $routeParams) {
    $http.get(API_URL+'students/'+$routeParams.id)
    .then(function(response) {
    $scope.student = response.data
    });

    $scope.editData = function(){
        console.log($routeParams.id);
    $http({
        method: "PUT",
        url: API_URL+'students/'+$routeParams.id,
        data: $scope.student
    }).then(
        function success(response){
            alert('Sửa thành công');
        },
        function error(response){          
        },        
)}
});