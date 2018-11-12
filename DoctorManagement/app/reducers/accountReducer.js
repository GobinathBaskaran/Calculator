const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {
    if (action && action.type) {
        return state;
    }
    return state;
}