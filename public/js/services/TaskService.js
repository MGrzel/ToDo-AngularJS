app.factory('TaskService', function () {
    return {
        taskList: [
            {
                id: 0,
                title: 'Go shopping',
                finished: false,
                categoryId: 1,
                taskNote: '',
            },
            {
                id: 1,
                title: 'Learn to the exam',
                finished: false,
                categoryId: 0,
                taskNote: '',
            },
            {
                id: 2,
                title: 'Drive to work',
                finished: false,
                categoryId: 2,
                taskNote: '',
            },
            {
                id: 3,
                title: 'Watch TV',
                finished: false,
                categoryId: 3,
                taskNote: '',
            }
        ],

        getTask(id) {

            for(let i in this.taskList) {
                if(this.taskList[i].id == id)
                    return this.taskList[i];
            }

            return null;
        },

        changeStatus(task) {
            task.finished = !task.finished;
        },

        removeTask(id) {
            let index = 0;

            for (index in this.taskList) {
                if (this.taskList[index].id == id)
                    break;
            }
            this.taskList.splice(index, 1);
        },

        addTask(newTitle, category) {
            newTask = {
                id: this.taskList.length,
                title: newTitle,
                finished: false,
                categoryId: category,
                taskNote: ''
            };
            this.taskList.push(newTask);
        },
    };
});