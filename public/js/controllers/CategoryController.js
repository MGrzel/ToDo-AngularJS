angular.module('ToDoApp').controller('CategoryController', ['$scope', 'TaskService', 'CategoryService', '$location',
    function ($scope, TaskService, CategoryService, $location) {
        $scope.taskService = TaskService;
        $scope.categoryService = CategoryService;

        $scope.error = false;

        $scope.newCategory = '';

        $scope.removeCategory = function (id) {
            let result = CategoryService.removeCategory(id);
            if (!result) {
                $scope.error = 'Error! Probably this category is already assigned to one of the tasks or you are trying to delete the last remaining category.';
            }
        }

        $scope.addCategory = function () {
            if ($scope.newCategory == '') {
                $scope.error = 'Cannot be empty.';
                return;
            }

            if (CategoryService.checkExistanceByValue($scope.newCategory)) {
                $scope.error = 'Category of this value already exist.';
                return;
            }

            $scope.error = false;

            CategoryService.addCategory($scope.newCategory);
            $scope.newCategory = '';
        }

        $scope.clearError = function () {
            $scope.error = false;
        }

        $scope.checkForError = function (category, oldValue) {
            if (category.value == '') {
                $scope.error = 'Cannot be empty.';
                category.value = oldValue;
                return;
            }

            for (let i in CategoryService.categoryList) {
                if (category.value == CategoryService.categoryList[i].value && category.id != CategoryService.categoryList[i].id) {
                    $scope.error = 'Category of this value already exist.';
                    category.value = oldValue;
                    return;
                }
            }
        }
    }
]);