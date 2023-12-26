app.controller('NextStep', function ($scope) {
    $scope.back = false;
    $scope.step1 = true;
    $scope.step2 = false;
    $scope.step3 = false;
    $scope.step = 1;
    $scope.isShowHide = function (param) {
        if (param == "next-step-1") {
            $scope.back = true;
            $scope.step1 = false;
            $scope.step2 = true;
            $scope.step3 = false;
            $scope.step = 2;
        }
        else if (param == "next-step-2") {
            $scope.back = true;
            $scope.step1 = false;
            $scope.step2 = false;
            $scope.step3 = true;
            $scope.step = 3;
        }
        else {
            $scope.back = false;
            $scope.step1 = true;
            $scope.step2 = false;
            $scope.step3 = false;
            $scope.step = 1;
        }
    }
    $scope.backStep = function (index) {
        index = $scope.step;
        if (index == 3) {
            $scope.back = true;
            $scope.step1 = false;
            $scope.step2 = true;
            $scope.step3 = false;
            $scope.step = 2;
        }
        else if (index == 2) {
            $scope.back = false;
            $scope.step1 = true;
            $scope.step2 = false;
            $scope.step3 = false;
            $scope.step = 1;
        }
    }
});

