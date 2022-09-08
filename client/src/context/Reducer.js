import { ACTION } from './Actions';

const LoginReducer = (state, action) => {
  switch (action.type) {
    case ACTION.LOGIN_START:
      return {
        user: null,
        isFetching: true,
        error: false,
      };

    case ACTION.LOGIN_SUCCSESS:
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case ACTION.LOGIN_FAILURE:
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default LoginReducer;
