import {Categories,Tasks} from './collections'
import { check } from 'meteor/check'
Meteor.methods({
    
    changeCategori(categori){
        check(categori,{
            taskCategori: String,
            taskId : String
        })
        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }
        let taskId = categori.taskId
        let taskCategori = categori.taskCategori

        Tasks.update({_id: taskId}, {$set: {taskCategori: taskCategori}})

    },    

    changeCategoriTitle(title){
        check(title,{
            taskTitle: String,
            taskId : String
        })
        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }
        let taskId = title.taskId
        let taskTitle = title.taskTitle

        Tasks.update({_id: taskId}, {$set: {taskTitle: taskTitle}})

    },    
    
    changeTaskWeight(weight){
        check(weight,{
            changeWeightTask: String,
            taskId : String
        })
        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }
        let taskId = weight.taskId
        let taskWeight = weight.changeWeightTask

        Tasks.update({_id: taskId}, {$set: {taskWeight: taskWeight}})

    },
    changeGrade(grade){
        check(grade,{
            taskGrade: String,
            taskId : String
        })
        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }
        let taskId = grade.taskId
        let taskGrade = grade.taskGrade

        Tasks.update({_id: taskId}, {$set: {taskGrade: taskGrade}})

    },

    changeStartDate(StartDate){
        check(StartDate,{
            startDate: String,
            taskId : String
        })
        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }
        let taskId = StartDate.taskId
        let startDate = StartDate.startDate

        Tasks.update({_id: taskId}, {$set: {startDate: startDate}})

    },

    changeEndDate(EndDate){
        check(EndDate,{
            endDate: String,
            taskId : String
        })
        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }
        let taskId = EndDate.taskId
        let endDate = EndDate.endDate

        Tasks.update({_id: taskId}, {$set: {endDate: endDate}})

    },

    changeTaskPriority(priority){
        check(priority,{
            taskPriority: String,
            taskId : String
        })
        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }
        let taskId = priority.taskId
        let taskPriority = priority.taskPriority
        console.log(taskId)
        console.log(taskPriority)

        Tasks.update({_id: taskId}, {$set: {taskPriority: taskPriority}})

    },
    changeTaskState(priority){
        check(priority,{
            taskState: String,
            taskId : String
        })
        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }
        let taskId = priority.taskId
        let taskState = priority.taskState
        console.log(taskId)
        console.log(taskState)

        Tasks.update({_id: taskId}, {$set: {taskState: taskState}})

    },
    

    addQuickTask(infos){
        check(infos,{
            quickTaskTitle: String,  
            quikTaskCategori: String
        })
        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }
        let infoTask = {
            taskTitle: infos.quickTaskTitle,
            taskCategori: infos.quikTaskCategori,
            createdAt: new Date(),
            ownerId: this.userId,
            ownerPseudo:Meteor.user().username
        }
        let categori= {
            name: infos.quikTaskCategori,
            createdAt: new Date(),
            createBy: Meteor.user().username
        }
        if(Categories.findOne({name: infos.quikTaskCategori}) == undefined ){Categories.insert(categori)}
        Tasks.insert(infoTask)
    },
    

    addTasks(information) {
        check(information, {
            taskTitle: String,  
            taskCategori: String,
            description: String,
            startDate: String,
            endDate: String,
            taskPriority: String,
            taskWeight: String,
            taskState: String,
            taskTimeEstimed: String,

        })

        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }

        let infoTask = {
            taskTitle: information.taskTitle,
            taskCategori: information.taskCategori,
            description: information.description,
            startDate: information.startDate,
            endDate: information.endDate,
            taskPriority: information.taskPriority,
            taskTimeEstimed: information.taskTimeEstimed,
            taskState: information.taskState,
            taskWeight: information.taskWeight,
            createdAt: new Date(),
            ownerId: this.userId,
            ownerPseudo:Meteor.user().username
        }
        let categori= {
            name: information.taskCategori,
            createdAt: new Date(),
            createBy: Meteor.user().username
        }

        Tasks.insert(infoTask)
        if(Categories.findOne({name: information.taskCategori}) == undefined ){Categories.insert(categori)}

    }
})