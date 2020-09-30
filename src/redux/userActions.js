

const setUser = (name) => {
    return {
        type: "SET_USER",
        payload: name
    }
}

const logOut = () => {
    return {
        type: "LOG_OUT"
    }
}

export { setUser, logOut };