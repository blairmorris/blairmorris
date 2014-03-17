var mainApp = angular.module('mainApp', []);

mainApp.controller('MainController', function($scope, $http) {
    var contact = {};

    $scope.sendMail = function(data){
        $http.post('/contact', data)
            .success(function(data, status){
                console.log('email successfully sent',data,status);
            })
            .error(function(data, status){
                console.log('there was an error sending your email, please email directly at edward@blairmorris.com')
            });

    };
});