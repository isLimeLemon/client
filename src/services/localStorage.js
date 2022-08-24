const keyName = "ONSTOCK-TOKEN"

export const SaveToken = (token) => {
    return localStorage.setItem(keyName, token)
}

export const GetToken = () => {
    return localStorage.getItem(keyName)
}