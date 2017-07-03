angular.module('ToDoApp').config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        
        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);


        $routeProvider
            .when('/', {
                templateUrl: '/views/taskList.html',
                controller: 'TaskListController'
            })
            .when('/task/:id', {
                templateUrl: '/views/taskInfo.html',
                controller: 'TaskInfoController'
            })
            .when('/category', {
                templateUrl: '/views/categoryList.html',
                controller: 'CategoryController'
            })
            .otherwise({
                templateUrl: '/views/notFound.html',
                controller: 'NotFoundController'
            });
    }
]);