export const setInForm = (event, state, callback) => {
  const { name, value } = event.target;
  callback({
    ...state,
    [name]: value,
  });
};
export const inStorage = (key, token, remember) => {
  remember
    ? localStorage.setItem(key, token)
    : sessionStorage.setItem(key, token);
};
export const fromStorage = (key) => {
  localStorage.getItem(key) || sessionStorage.getItem(key);
};
export const removeStorage = (key) => {
  localStorage.removeItem(key);
  sessionStorage.removeItem(key);
};
