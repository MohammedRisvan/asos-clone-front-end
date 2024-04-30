

// const initialstate = {
//     count: 0,
//     DATAS:"REDXES"
// }

// const reducer = (state=initialstate, action) => {
//     switch (action.payload) {
//         case "incriment":
//             return ({ ...state, count: state.count + 1 });
//         case "decriment":
//             return ({ ...state, count: state.count - 1 });
//         default:
//             return state;
//     }

// }
// export default reducer;// reducers.js

import { INCREMENT, DECREMENT } from './actions';

const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

export default counterReducer;
