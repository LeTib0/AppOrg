import {Categories,Tasks} from './collections'
import { check } from 'meteor/check'
Meteor.methods({

    addQuickTask(infos){
        check(infos,{
            quickTaskTitle: String,  
            quikTaskCategori: String
        })
        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }
        let infoTask = {
            quickTaskTitle: infos.quickTaskTitle,
            quikTaskCategori: infos.quikTaskCategori,
            createdAt: new Date(),
            ownerId: this.userId,
            ownerPseudo:Meteor.user().username
        }
        let categori= {
            name: infos.quikTaskCategori,
            createdAt: new Date(),
            createBy: Meteor.user().username
        }
        //Penser à vérifier si la catégorie existe
        
        Tasks.insert(infoTask)
        Categories.insert(categori)
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

        //Penser à vérifier si la catégorie existe
        Tasks.insert(infoTask)
        Categories.insert(categori)

    }
})