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
            const currenttask = global.scheduledTasks.find((t) => t?.id === task.id)
            if(currenttask){
                const index = global.scheduledTasks.indexOf(currenttask);
                global.scheduledTasks.splice(index, 1);
            }
        }
    };
})();