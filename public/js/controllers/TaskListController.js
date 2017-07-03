angular.module('ToDoApp').controller('TaskListController', ['$scope', 'TaskService', '$location', 'CategoryService', function ($scope, TaskService, $location, CategoryService) {
    $scope.taskService = TaskService;
    $scope.categoryService = CategoryService;

    $scope.error = false;

    $scope.showTask = function (id) {
        $location.path('/task/' + id);
    }

    $scope.selectedCategory = CategoryService.selectedCategory;

    $scope.newTaskTitle = '';

    $scope.addTask = function () {
        if ($scope.newTaskTitle == '') {
            $scope.error = 'Task title cannot be empty.';
        } else {
            TaskService.addTask($scope.newTaskTitle, $scope.selectedCategory.id);
            $scope.newTaskTitle = '';
        }
    };

    $scope.clearError = function () {
        $scope.error = false;
    }
}
]);