import './tasksBoard.html'
import {Categories} from './../../../both/collections'

Template.createTaskForm.helpers({
    mesCategories(){
        return Categories.find().fetch()
    }
})


Template.tasksBoard.events({
'click .js-open-add-task-modal'(event, instance){
    Modal.show('addTaskModal')
}
})
