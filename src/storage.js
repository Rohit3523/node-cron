module.exports = (() => {
    if(!global.scheduledTasks){
        global.scheduledTasks = [];
    }
    
    return {
        save: (task) => {
            global.scheduledTasks.push(task);
        },
        getTasks: () => {
            return global.scheduledTasks;
        },
        destroyTask: (task) => {
            const task = global.scheduledTasks.find((t) => t?.id === task.id);
            if(task){
                task.stop();
                global.scheduledTasks.splice(global.scheduledTasks.indexOf(task), 1);
            }
        }
    };
})();