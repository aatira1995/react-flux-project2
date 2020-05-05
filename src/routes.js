import React from 'react';
import {Router, browserHistory,  Route, IndexRoute} from 'react-router';
import App  from './components/App';
import LoginPage from './components/authentication/Login';
import UserList from './components/user/UserList';

class Routes extends React.Component {
    render() {
        return (
            <Router history = {browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={LoginPage} />
                    <Route path="/users" component={UserList}/>
                <Route />
                </Route>
            </Router>
        );
    }
}

export default Routes;