import {combineReducers} from 'redux';

import collaboration from './collaboration';
import collaborations from './collaborations';
import companies from './companies';
import company_data from './company';
import datasets from './datasets';
import login_data from './login';
import socket from './socket';
import user from './user'
import users_collaborations from './companyCollaborations'
import favorite_collaborations from './favoriteCollaborations'
import myFeed from './myFeed'


export default combineReducers({
    collaboration: collaboration.reducer,
    collaborations: collaborations.reducer,
    companies: companies.reducer,
    company_data: company_data.reducer,
    datasets: datasets.reducer,
    login_data: login_data.reducer,
    socket: socket.reducer,
    user: user.reducer,
    users_collaborations: users_collaborations.reducer,
    favorite_collaborations: favorite_collaborations.reducer,
    myFeed: myFeed.reducer,
});
