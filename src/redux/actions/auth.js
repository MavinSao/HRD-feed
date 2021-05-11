import AuthService from '../../service/auth.service'
import { REGISTER_USER, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from './types'

export const signUp = (fullname, username, password) => (dp) => {
    return AuthService.register(fullname, username, password)
        .then(() => {
            dp({
                type: REGISTER_SUCCESS,
            })
            return Promise.resolve();
        })
        .catch(() => {
            dp({
                type: REGISTER_FAIL,
            })
            return Promise.reject();
        })
}


export const signIn = (username, password) => (dp) => {
    return AuthService.login(username, password)
        .then(data => {
            dp({
                type: LOGIN_SUCCESS,
                payload: { user: data }
            })
            return Promise.resolve();
        })
        .catch(error => {
            dp({
                type: LOGIN_FAIL
            })
            return Promise.reject();
        })
}


export const signOut = () => (dp) => {
    AuthService.logout()
    dp({
        type: LOGOUT
    })
    return Promise.resolve();
}
