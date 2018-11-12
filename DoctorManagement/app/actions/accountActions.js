export const login = (username, password) => {
    return {
        type: 'LOGIN',
        username,
        password
    }
}

export const login = (username, password) => {
    return (dispatch) => {
        return fetch('').then(() => {
            return 0;
        },
            (err) => err);
    }
}