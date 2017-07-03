angular.module('ToDoApp').controller('TaskInfoController', ['$scope', 'TaskService', 'CategoryService', '$routeParams', function($scope, TaskService, CategoryService, $routeParams) {
    let id = $routeParams.id;
    $scope.taskService = TaskService;
    $scope.categoryService = CategoryService;

    $scope.task = TaskService.getTask(id);
    $scope.editMode = false;

    $scope.checkForError = function(oldTitle) {
        if($scope.task.title == '') {
            $scope.task.title = oldTitle;
        }
    }

    $scope.changeEditStatus = function() {
        $scope.editMode = !$scope.editMode;
    };
}]);