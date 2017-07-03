angular.module('ToDoApp').controller('TaskListController', ['$scope', 'TaskService', '$location', 'CategoryService', function ($scope, TaskService, $location, CategoryService) {
    $scope.taskService = TaskService;
    $scope.categoryService = CategoryService;

    $scope.error = false;

    $scope.showTask = function (id) {
        $location.path('/task/' + id);
    };

    $scope.selectedCategory = CategoryService.categoryList[0].id + '';

    $scope.newTaskTitle = '';

    $scope.addTask = function () {
        $scope.newTaskTitle, $scope.selectedCategory -= ''; 
        if ($scope.newTaskTitle == '') {
            $scope.error = 'Task title cannot be empty.';
        } else {
            TaskService.addTask($scope.newTaskTitle, $scope.selectedCategory);
            $scope.newTaskTitle = '';
        }

    }

    $scope.clearError = function () {
        $scope.error = false;
    }
}
]);