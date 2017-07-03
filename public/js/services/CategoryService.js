angular.module('ToDoApp').factory('CategoryService', ['TaskService', function (TaskService) {
    return {
        categoryList: [{
            id: 0,
            value: 'Studies',
            colorId: 6
        },
        {
            id: 1,
            value: 'Home',
            colorId: 4
        },
        {
            id: 2,
            value: 'Work',
            colorId: 2
        },
        {
            id: 3,
            value: 'Casual',
            colorId: 5
        }
        ],

        colorList: [{
            id: 0,
            value: '#141E8E',
            name: 'blue'
        },
        {
            id: 1,
            value: '#771A31',
            name: 'maroon'
        },
        {
            id: 2,
            value: 'green',
            name: 'darkgreen'
        },
        {
            id: 3,
            value: '#79B473',
            name: 'lightgreen'
        },
        {
            id: 4,
            value: '#F7CB15',
            name: 'yellow'
        },
        {
            id: 5,
            value: '#4ECDC4',
            name: 'cyan'
        },
        {
            id: 6,
            value: '#D63F10',
            name: 'orange'
        }
        ],

        getColorById(id) {
            for (let i in this.colorList) {
                if (this.colorList[i].id == id) {
                    return this.colorList[i].value;
                }
            }
        },

        getColorByCategoryId(id) {
            let category = this.getCategory(id);
            for (let i in this.colorList) {
                if (this.colorList[i].id == category.colorId) {
                    return this.colorList[i].value;
                }
            }
        },

        selectedCategory: {
            id: 0,
            value: 'Uczelnia'
        },

        lastId: 3,

        getCategoryValue(id) {
            for (let i in this.categoryList) {
                if (this.categoryList[i].id == id)
                    return this.categoryList[i].value;
            }
        },

        getCategoryByValue(value) {
            for (let i in this.categoryList) {
                if (this.categoryList[i].value == value)
                    return this.categoryList[i];
            }
        },

        getCategory(id) {
            for (let i in this.categoryList) {
                if (this.categoryList[i].id == id)
                    return this.categoryList[i];
            }
        },

        checkExistanceByValue(value) {

            for (let i in this.categoryList) {
                if (this.categoryList[i].value == value)
                    return true;
            }

            return false;

        },



        addCategory(value) {

            this.categoryList.push({

                id: this.lastId + 1,
                value: value,
                colorId: 0

            });

            this.lastId++;

        },

        removeCategory(id) {

            let exist = false;

            for (let i in TaskService.taskList) {

                if (TaskService.taskList[i].categoryId == id) {
                    exist = true;
                    return false;
                }

            }

            if (this.categoryList.length == 1)
                return false;

            let index = 0;

            for (index in this.categoryList) {
                if (this.categoryList[index].id == id)
                    break;
            }

            this.categoryList.splice(index, 1);
            return true;

        }

    };
}]);