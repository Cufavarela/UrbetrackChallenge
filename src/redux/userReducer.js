
const currentUser = (state = { user: {}, loggedIn: false }, action) => {
    switch(action.type){
        case "SET_USER":
            return { ...state, user: action.payload, loggedIn: true }
        case "LOG_OUT":
            return { user: {}, loggedIn: false }
        default:
            return state
    }
}

export default currentUser;