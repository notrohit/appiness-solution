import { createSlice } from '@reduxjs/toolkit';
import { USER } from '../../constants/default';

export const slice = createSlice({
  name: 'login',
  initialState: {
    authenticated: false,
    username: '',
  },
  reducers: {
    doLogin: (state, action) => {
      debugger
      // state.value += action.payload;
    },
  },
});

export const { doLogin } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const login = (username,password) => dispatch => {
  debugger
  if(USER.username === username.trim() && USER.password === password){
    dispatch(doLogin())
    // cookies.set('authenticated',true)
    // cookies.set('username',username)
    // window.location.replace("/")
  }
}

export const isAuthenticated = state => state.login.authenticated
export const getUsername = state => state.login.username

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;

export default slice.reducer;
