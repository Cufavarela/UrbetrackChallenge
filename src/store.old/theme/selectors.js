export const initialState = {
    darkTheme: false,
}

export const getDarkTheme = (state = initialState) => state.darkTheme || initialState.darkTheme;