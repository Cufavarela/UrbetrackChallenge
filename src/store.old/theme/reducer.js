import { TOGGLE_DARKTHEME } from "./actions";

function themeReducer (state = { darkTheme: false }, action) {
    switch (action.type) {
        case TOGGLE_DARKTHEME:
            return {
                ...state,
                darkTheme: !state.darkTheme
            }
        default:
            return state;
    }
}

export default themeReducer ;