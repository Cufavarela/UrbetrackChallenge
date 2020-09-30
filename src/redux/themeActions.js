const goDark = () => {
    return {
        type: "GO_DARK",
        payload: {}
    }
}

const goLight = () => {
    return {
        type: "GO_LIGHT",
        payload: {}
    }
}

export { goDark, goLight };