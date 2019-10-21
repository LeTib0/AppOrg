import './tasksBoard.html'
import {Categories} from './../../../both/collections'

//tasksBoard
Template.tasksBoard.helpers({
    mesCategories(){
        return Categories.find().fetch()
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
        Meteor.call('addTasks', {
            taskTitle: taskTitle,
            taskCategori: taskCategori,
            description: description,
            startDate: startDate,
            endDate: endDate,
            taskPriority: taskPriority,
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
            }
        })

    }
})


Template.tasksBoard.events({
'click .js-open-add-task-modal'(event, instance){
    Modal.show('addTaskModal')
}
})
