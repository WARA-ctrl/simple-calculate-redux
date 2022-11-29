export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    paylad: num,
  };
};
export const decNumber = (num) => {
  return {
    type: "DECREMENT",
    paylad: num,
  };
};
export const divNumber = (num) => {
  return {
    type: "DIVIDE",
    paylad: num,
  };
};
export const mulNumber = (num) => {
  return {
    type: "MULTIPLICATION",
    paylad: num,
  };
};
