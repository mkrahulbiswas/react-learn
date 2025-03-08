import constants from "../Constants"
function cardItem(state = [], action: any) {
  console.log('Inside Reducer:- ', action)
  switch (action.type) {
    case constants.ADD_TO_CART:
      return [
        ...state,
        action.data
      ]
      break;
    default: return state
  }
}
export default cardItem