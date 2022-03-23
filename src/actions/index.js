export const actions = {
  USER_REQUEST: "USER_REQUEST",
  USER_SUCCESS: "USER_SUCCESS",
  USER_ERROR: "USER_ERROR",
};

export const userRequest = () => {
  return {
    type: actions.USER_REQUEST,
  };
};

export const userSuccess = (users) => {
  return {
    type: actions.USER_SUCCESS,
    users: users,
  };
};

export const userError = (error) => {
  return {
    type: actions.USER_ERROR,
    error:error
  };
};
