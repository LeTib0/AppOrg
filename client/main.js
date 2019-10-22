import '../both'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import { Categories, Tasks } from '../both/collections'
import { ReactiveVar } from 'meteor/reactive-var'
import './ui/globalHelpers/globalHelpers'

import './startup/router'
import './ui/layout/layout'

if (Meteor.isDevelopment){
    window.Categories = Categories
    window.Tasks = Tasks

}

if (Meteor.isDevelopment){
    window.FlowRouter = FlowRouter
}

