const currentTheme = (state = {darkTheme: false}, action) => {
    switch(action.type){
        case "GO_DARK":
            return { ...state, darkTheme: true}
        case "GO_LIGHT":
            return {...state, darkTheme: false}
        default:
            return state
    }
}

export default currentTheme;