import { AGE_UP, AGE_DOWN, AGE_UP_ASYNC } from "./action/types";

const initialState = {
  age: 20,
  name: "kamez"
};

// Method 1
const reducer = (state = initialState, action) => {
  const newState = { ...state };
  console.log(newState);
  switch (action.type) {
    case AGE_UP_ASYNC:
      return {
        age: (newState.age += action.payload)
      };
    // case AGE_UP:
    //   return {
    //     age: (newState.age += action.payload)
    //   };
    case AGE_DOWN:
      return {
        age: (newState.age -= action.payload)
      };

    default:
      return newState;
  }
};

// Method 2
// const reducer = (state = initialState, action) => {
//   const newState = { ...state };
//   console.log(newState)
//   switch (action.type) {
//     case AGE_UP:
//       newState.age += action.payload;
//       break;
//     case AGE_DOWN:
//       newState.age -= action.payload;
//       break;

//     default:
//       newState.age = newState.age;
//   }
//   return newState;
// };

export default reducer;
