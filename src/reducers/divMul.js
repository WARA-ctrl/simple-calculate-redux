const initialState = 5;

const multTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "DIVIDE":
      return state / 5;

      break;
    case "MULTIPLICATION":
      return state * 5;

      break;
    default:
      return state;
      break;
  }
};
export default multTheNumber;
