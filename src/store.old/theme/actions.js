export const TOGGLE_DARKTHEME = "TOGGLE_DARKTHEME";

export const toggleDarkTheme = () => (dispatch) => {
    dispatch({
        type: TOGGLE_DARKTHEME,
        payload: {}
    });
};