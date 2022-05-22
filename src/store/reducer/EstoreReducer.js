const initialState = {
  products: [],
  cardData: []
}


export default function EstoreReducer(state = initialState, action) {
  switch (action.type) {
    case "FATCHSTOREDATA": {
      return {
        ...state,
        products: action.payload
      }

    }
    case "ADDDATA": {
      return {
        ...state,
        products:[...state.products, action.payload]
      }

    }
    case "ADDCARDDATA": {
      return {
        ...state,
        cardData:[...state.cardData,action.payload]
      }

    }


    default:
      return state
  }
}
