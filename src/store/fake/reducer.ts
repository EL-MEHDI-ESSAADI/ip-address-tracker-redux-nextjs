import { actionTypes } from "./actions";

const initialState = {
   name: "Mehdi",
};

export function reducer(state = initialState, action: { type: string; payload?: string }) {
   switch (action.type) {
      case actionTypes.CHANGE_USER_NAME:
         return { ...state, name: action.payload };
      default:
         return state;
   }
}
