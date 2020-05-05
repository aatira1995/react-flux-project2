import React, {PropTypes} from 'react';
import LoginPage from './authentication/Login';
import UserList  from './user/UserList';
import Routes from '../routes'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            isAuthenticated: true
        };
        this.manageView = this.manageView.bind(this);
    }

    manageView() {
        return  this.state.isAuthenticated?<UserList/>:<LoginPage/>;
    }
    render() {
        return(
            // <Routes />
            // <div>
            //    {this.manageView()}
            // </div>
            <UserList/>
        );
    }
}

export default App;