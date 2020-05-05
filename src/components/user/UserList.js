import React from 'react';

import UserListStore from '../../stores/UserListStore';

import AppDispatcher from '../../dispatcher/AppDispatcher';
import {loadUsers} from '../../actions/UserActions';

class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            userList:[]
        };
        loadUsers();
    }

    componentDidMount() {
    }

    componentWillMount() {
        // AppDispatcher.dispatch({
        //     type:"LOAD_USERS"
        // });
        UserListStore.on("change", () => {
            this.setState({
                userList: UserListStore.getUsersList()
            });
        });
        console.log(this.state.userList)
    }

    renderUserList() {
        return (
            <tbody>
                {this.state.userList.map(user => (
                    <tr key={user.id}>
                        <td>{user.first_name + " "+ user.last_name}</td>
                        <td>{user.avatar}</td>
                    </tr>
                ))}
            </tbody>
        ); 
    }

    render() {
        return(
            <div>
                 <h1>User List</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    {this.renderUserList()}
                </table>
            </div>
        );
    }
}

export default UserList;