export const getAppHasBooted = state => {
    return state?.application?.appHasBooted !== undefined ? state?.application?.appHasBooted : false
}