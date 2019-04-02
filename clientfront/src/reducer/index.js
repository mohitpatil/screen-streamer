import  { combineReducers } from 'redux';
import authentication from './authentication'
import { reducer as FormReducer } from 'redux-form';

export default combineReducers ({
    auth: authentication,
    form: FormReducer
});