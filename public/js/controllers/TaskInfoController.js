angular.module('ToDoApp').controller('TaskInfoController', ['$scope', 'TaskService', 'CategoryService', '$routeParams', function($scope, TaskService, CategoryService, $routeParams) {
    let id = $routeParams.id;
    $scope.taskService = TaskService;
    $scope.categoryService = CategoryService;

    $scope.task = TaskService.getTask(id);
    $scope.editMode = false;
    $scope.error = false;

    $scope.checkForError = function(oldTitle) {
        if($scope.task.title == '') {
            $scope.error = 'Cannot be empty.';
            $scope.task.title = oldTitle;
        }
    };

    $scope.clearError = function () {
        $scope.error = false;
    }

    $scope.changeEditStatus = function() {
        $scope.editMode = !$scope.editMode;
    }
}]);