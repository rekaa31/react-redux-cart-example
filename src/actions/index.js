export const BUY_PRODUCT = 'BUY_PRODUCT'
export const CANCEL_PRODUCT = 'CANCEL_PRODUCT'

export const buyProduct = (value) => {
    return {
        type: BUY_PRODUCT,
        value
    }
}

export const cancelProduct = (value) => {
    return {
        type: CANCEL_PRODUCT,
        value
    }
}