import  { combineReducers } from 'redux';
import authentication from './authentication'
import { reducer as FormReducer } from 'redux-form';
import streamReducer from './streamReducer';

export default combineReducers ({
    auth: authentication,
    form: FormReducer,
    streams: streamReducer
});