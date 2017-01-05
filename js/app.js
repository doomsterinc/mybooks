'use strict';

var mbdApp = angular.module('mbdApp', []);

mbdApp.controller('mbdController', ['$scope', '$http', function ($scope, $http) {
    $scope.author = {
        name: 'Maicon Giovani, aka Doomster',
        title: 'FullStackDev',
        website: 'https://doomsterinc.github.io/'
    };

    $http.get('../data/books.json').success(function (data) {
        $scope.books = data;
    }).error(function(e){
        console.log(e);
    });
}]);
