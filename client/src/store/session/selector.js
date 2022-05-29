export const getToken = (state) => {
    return state.session.token
}

export const getValidSession = (state) => {
    return state.session.validSession
}