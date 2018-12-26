
var angularFormsApp = angular.module('angularFormsApp', ['ngRoute', 'ui.bootstrap']);

angularFormsApp.config(
    function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "app/Home.html",
                controller: "HomeController"
            })
            .when("/newEmployeeForm", {
                templateUrl: "app/EmployeeForm/efTemplate.html",
                controller: "efController"
            })
            .when("/updateEmployeeForm/:id", {
                templateUrl: "app/EmployeeForm/efTemplate.html",
                controller: "efController"
            })
            .otherwise({
                redirectTo: "/home"
            });
        //$locationProvider.html5Mode({ enabled: true, requireBase: false });
    });

angularFormsApp.controller("HomeController",
    function ($scope, $location, DataService) {

        DataService.getEmployees().then(
            function (results) {
                // on success
                var data = results.data;
            },
            function (results) {
                // on error
                var data = results.data;
            }
        );

        $scope.showCreateEmployeeForm = function () {
            $location.path('/newEmployeeForm');
        };

        $scope.showUpdateEmployeeForm = function (id) {
            $location.path('/updateEmployeeForm/' + id)
        };

    });

