import './tasksBoard.html'
import {Categories,Tasks} from './../../../both/collections'

//tasksBoard
Template.tasksBoard.helpers({
    mesCategories(){
        return Categories.find().fetch()
    }
})

Template.tasksBoard.helpers({
    myTasks(){
        return Tasks.find().fetch()
    }
})

Template.tasksBoard.events({
    'click .js-change-grade-to'(event, instance){
        event.preventDefault()
        let taskGrade = event.currentTarget.value
        let taskId = event.currentTarget.id
        Meteor.call('changeGrade',{
            taskGrade: taskGrade,
            taskId : taskId
        })
    }
})

Template.tasksBoard.events({
    'submit .js-change-start-date'(event, instance){
        event.preventDefault()
        let taskStartDate = event.target.taskStartDate.value
        let taskId = event.target.taskStartDate.id
        Meteor.call('changeStartDate',{
            startDate: taskStartDate,
            taskId : taskId
        }, function(err, res ){
            if(!err) {
                event.target.taskStartDate.value =''
            }
        })
    }
})
Template.tasksBoard.events({
    'submit .js-change-end-date'(event, instance){
        event.preventDefault()
        let taskEndDate = event.target.taskEndDate.value
        let taskId = event.target.taskEndDate.id
        Meteor.call('changeEndDate',{
            endDate: taskEndDate,
            taskId : taskId
        }, function(err, res ){
            if(!err) {
                event.target.taskEndDate.value =''
            }
        })
    }
})

Template.tasksBoard.events({
    'submit .js-create-quick-task'(event, instance){
        event.preventDefault()
        let quickTaskTitle = event.target.quickTaskTitle.value
        let quikTaskCategori = event.target.quikTaskCategori.value

        
        Meteor.call('addQuickTask',{
            quickTaskTitle: quickTaskTitle,
            quikTaskCategori: quikTaskCategori
        }, function(err, res ){
            if(!err) {
                event.target.quickTaskTitle.value = ''
                event.target.quikTaskCategori.value = ''           
            }
        })
        }
})

Template.tasksBoard.events({
    'submit .js-change-title'(event, instance){
        event.preventDefault()
        let taskTitle = event.target.changeTaskTitle.value
        let taskId = event.target.changeTaskTitle.id
        Meteor.call('changeTaskTitlle',{
            taskTitle : taskTitle,
            taskId :taskId
        })
    }
})

Template.tasksBoard.events({
    'submit .js-change-categorie'(event, instance){
        event.preventDefault()
        let taskCategori = event.target.changeCategori.value
        let taskId = event.target.changeCategori.id
        Meteor.call('changeCategori',{
            taskCategori : taskCategori,
            taskId :taskId
        })
    }
})

Template.tasksBoard.events({
    'click .js-change-weight-to'(event,instance){
        event.preventDefault()
        let changeWeightTask = event.currentTarget.value
        let taskId = event.currentTarget.id
        Meteor.call('changeTaskWeight',{
            changeWeightTask : changeWeightTask,
            taskId :taskId
        })
    }
})


Template.tasksBoard.events({
    'click .js-change-priority-to'(event,instance){
        event.preventDefault()
        let taskPriority = event.currentTarget.value
        let taskId = event.currentTarget.id
        Meteor.call('changeTaskPriority',{
            taskPriority : taskPriority,
            taskId :taskId
        })
    }
})

Template.tasksBoard.events({
    'click .js-change-state-to'(event,instance){
        event.preventDefault()
        let taskState = event.currentTarget.value
        let taskId = event.currentTarget.id
        Meteor.call('changeTaskState',{
            taskState : taskState,
            taskId :taskId
        })
    }
})


//createTaskForm
Template.createTaskForm.helpers({
    mesCategories(){
        return Categories.find().fetch()
    }
})

Template.createTaskForm.events({
    'submit .js-create-task'(event,instance){
        event.preventDefault()
        //Penser fermer modal
        let taskTitle = event.target.taskTitle.value
        let taskCategori = event.target.taskCategori.value
        let description = event.target.description.value
        let startDate = event.target.startDate.value
        let endDate = event.target.endDate.value
        let taskPriority = event.target.taskPriority.value
        let taskWeight = event.target.taskWeight.value
        let taskTimeEstimed = event.target.taskTimeEstimed.value
        let taskState = event.target.taskState.value

        Meteor.call('addTasks', {
            taskTitle: taskTitle,
            taskCategori: taskCategori,
            description: description,
            startDate: startDate,
            endDate: endDate,
            taskPriority: taskPriority,
            taskState: taskState,
            taskTimeEstimed: taskTimeEstimed,
            taskWeight: taskWeight
        },function(err, res){
            if(!err) {
                 taskTitle = event.target.taskTitle.value = ''
                 taskCategori = event.target.taskCategori.value = ''
                 description = event.target.description.value = ''
                 startDate = event.target.startDate.value = ''
                 endDate = event.target.endDate.value = ''
                 taskPriority = event.target.taskPriority.value = ''
                 taskWeight = event.target.taskWeight.value = ''
                 taskTimeEstimed = event.target.taskTimeEstimed.value = ''
                 taskState = event.target.taskState.value = ''
            }
        })

    }
})


Template.tasksBoard.events({
'click .js-open-add-task-modal'(event, instance){
    Modal.show('addTaskModal')
}
})
