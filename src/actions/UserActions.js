import AppDispatcher from '../dispatcher/AppDispatcher';
import { getUsers } from "../actions/Api";

export function loadUsers() {
    getUsers() 
    .then(res => {
        let data = res.data.data;
        console.log(data)
        AppDispatcher.dispatch({
            type: "LOAD_USERS",
            data
        });
        // console.log(res.data.data)
        // return res.data.data;
    })
    .catch(err => {
    });
}