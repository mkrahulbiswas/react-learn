import constants from "../Constants"
export const addToCart = (data: any) => {
  console.log('Inside Action:- ', data)
  return {
    type: constants.ADD_TO_CART,
    data: data
  }
}
export const removeToCart = (data: any) => {
  return {
    type: 'REMOVE_TO_CART',
    data: data
  }
}