export const ACTION = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCSESS: 'LOGIN_SUCCSESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
};

// Login actions
export const LoginStart = (userCredentials) => ({
  type: ACTION.LOGIN_START,
});

export const LoginSuccsess = (user) => ({
  type: ACTION.LOGIN_SUCCSESS,
  payload: user,
});

export const LoginFailure = () => ({
  type: ACTION.LOGIN_FAILURE,
});
