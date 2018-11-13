import { LOGIN, LOGOUT } from './actionTypes';

export const login = (email, password) => {
    return {
        type: LOGIN,
        email,
        password
    }
}