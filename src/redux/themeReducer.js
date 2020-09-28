const currentTheme = (state = {}, action) => {
    switch(action.type){
        case "GO_DARK":
            return { ...state, darkTheme: !state.darkTheme}
        default:
            return state
    }
}

export default currentTheme;