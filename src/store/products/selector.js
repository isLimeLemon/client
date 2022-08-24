export const getProducts = (state) => {
    return state?.products?.list
}

export const getLoadingProducts = (state) => {
    return state.products.getProductsInProgress
}