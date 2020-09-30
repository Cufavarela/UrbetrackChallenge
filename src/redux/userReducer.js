const storedUser = localStorage.getItem('user') || '';

const loggedIn = !!storedUser;

const currentUser = (state = { user: storedUser, loggedIn: loggedIn }, action) => {
    switch(action.type){
        case "SET_USER":
            localStorage.setItem('user', action.payload);
            return { ...state, user: action.payload, loggedIn: true }
        case "LOG_OUT":
            localStorage.removeItem('user');
            return { user: '', loggedIn: false }
        default:
            return state
    }
}

export default currentUser;