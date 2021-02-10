import { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import Cookies from 'universal-cookie';
import './login.css'
import LogOut from "../components/LogOut"
import { USER } from '../constants/default'
// import login from "../components/login/loginSlice"

const cookies = new Cookies();

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginFormError, setLoginFormError] = useState({})
  
  const login = ()=>{
    if(USER.username === username.trim() && USER.password === password){
      cookies.set('authenticated',true)
      cookies.set('username',username)
      setLoginFormError({})
      window.location.replace("/")
    } else {
      setLoginFormError({password: "Incorrect Password"})
    }
  }

  const IS_LOGGED_IN = cookies ? (cookies.get('authenticated') === 'true') : false

  if (!IS_LOGGED_IN) {
    return (
      <div className="app">
        {/* <form noValidate autoComplete="off"> */}
          <div className="container">
            <TextField
              value={username}
              onChange={(event)=>{
                setUsername(event.target.value)
                setLoginFormError({})
              }}
              label="Email" placeholder="Email" autoFocus
              error={!!loginFormError?.username}
              helperText={loginFormError?.username}
            />
            <div className="spacing" />
            <TextField
              label="Password" type="password" placeholder="password"
              value={password} onChange={(event)=>{
                setPassword(event.target.value)
                setLoginFormError({})
              }}
              error={!!loginFormError?.password}
              helperText={loginFormError?.password}
            />
            <div className="spacing" />
            <Button className="container-btn" onClick={login}>Login</Button>
          </div>
        {/* </form> */}
      </div>
    )
  }
  return (<LogOut/>)
}

export default App;
