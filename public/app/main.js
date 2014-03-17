var mainApp = angular.module('mainApp', ['ui.bootstrap']);

mainApp.controller('MainController', function($scope, $http) {
    $scope.contact = {};
    $scope.alerts = {};

    $scope.sendMail = function(data){
        $http.post('/contact', data)
            .success(function(data, status){
                $scope.contact = {};
                $scope.addAlert('contact', 'success', 'Email Sent')
            })
            .error(function(data, status){
                $scope.addAlert('contact', 'danger', 'There was a problem sending your email. Please email me at edward@blairmorris.com');
            });
    };

    $scope.addAlert = function(alertAry, type, msg) {
        $scope.alerts[alertAry] ?
            $scope.alerts[alertAry].push({type:type, msg:msg}) :
            $scope.alerts[alertAry] = [{type:type, msg:msg}];
    };

    $scope.closeAlert = function(index, alertAry) {
        if($scope.alerts[alertAry]){
            $scope.alerts[alertAry].splice(index, 1);
        }
    };



});