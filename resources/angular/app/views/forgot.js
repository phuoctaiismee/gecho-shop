app.controller('showhideForgotPass', function ($scope) {
    $scope.showfg = false;
    $scope.showlg = true;
    $scope.isShowHide = function (param) {
        if (param == "show") {
            $scope.showfg = true;
            $scope.showlg = false;
        }
        else if (param == "hide") {
            $scope.showfg = false;
            $scope.showlg = true;
        }
        else {
            $scope.showfg = true;
            $scope.showlg = false;
        }
    }
});