import EventEmitter from 'events';
import Dispatcher from '../dispatcher/AppDispatcher';
import {getUsers} from '../actions/Api';

class UserStore extends EventEmitter{
    constructor(){
        super();
        this.users = [{
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128",
            id: 1,
            first_name: "George",
            last_name: "Bluth"
        },
        {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128",
            id: 2,
            first_name: "Janet",
            last_name: "Weaver"
        },
        {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128",
            id: 3,
            first_name: "Emma",
            last_name: "Vong"
        }];
    }

    getUsersList() {
        return this.users;
    }

    handleUserActions(action) {
        console.log(action)
        switch(action.type){
            case "LOAD_USERS": {
                this.users =  action.data;
            }
        }
        this.emit("change");
    }
}

const userStore = new UserStore;
//Dispatcher.register(userStore.handleUserActions.bind(userStore));

export default userStore;
// var EventEmitter = require('events').EventEmitter;
// var assign = require('object-assign');

// var ListStore = assign({}, EventEmitter.prototype, {
//   items: [],

//   getAll: function () {
//     return this.items;
//   },

//   addNewItemHandler: function (text) {
//     this.items.push(text);
//   },

//   emitChange: function () {
//     this.emit('change');
//   },

//   addChangeListener: function(callback) {
//     this.on('change', callback);
//   },

//   removeChangeListener: function(callback) {
//     this.removeListener('change', callback);
//   }
// });

// module.exports = ListStore;
